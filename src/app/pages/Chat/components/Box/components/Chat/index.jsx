import React, { useEffect, useRef } from 'react'
import Talk from 'talkjs'

import { http } from '@components/Axios'
import Header from './components/Header'
import UserUtils from '@utils/userUtils'
import background from '@images/png/background.png'

import './styles.scss'

const Chat = (props) => {
  const { item, updateList } = props
  const talkjsContainer = useRef()

  useEffect(() => {
    if (item) {
      getChat()
    }
  }, [item])

  const updateChannel = (item) => {
    const user = UserUtils.getUser()
    http({
      api: 'conversations',
      method: 'put',
      params: { agente_id: user.id, status: '02' },
      others: item.conversationId
    })
  }

  const getChat = () => {
    Talk.ready.then(() => {
      const user = UserUtils.getUser()

      let me = new Talk.User({
        id: user.id,
        name: user.name,
        email: user.email,
        photoUrl:
          'http://dmssolutions.nl/wp-content/uploads/2013/06/helpdesk.png',
        welcomeMessage: 'Bem vindo ao Tok'
      })

      window.talkSession = new Talk.Session({
        appId: 'tc7Q1y1H',
        me: me
      })

      var conversation = window.talkSession.getOrCreateConversation(
        item.conversation_id
      )

      conversation.setParticipant(me)

      const chatbox = window.talkSession.createChatbox(conversation, {
        showChatHeader: false,
        showFeedHeader: false,
        showMobileBackButton: false
      })

      chatbox.mount(talkjsContainer.current)

      chatbox.on('sendMessage', updateList)
      chatbox.on('conversationSelected', updateChannel)
    })
  }

  return (
    <div className="Chat">
      <Header {...props} />
      <div
        className="chat-maessage"
        ref={talkjsContainer}
        id="chat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  )
}

export default Chat
