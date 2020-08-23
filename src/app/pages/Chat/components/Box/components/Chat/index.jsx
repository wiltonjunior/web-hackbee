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
    Talk.ready.then(() => {
      var me = new Talk.User({
        // just hardcode any user id, as long as your real users don't have this id
        id: 'myapp_operator',
        name: 'ExampleApp Operator',
        email: 'support@example.com',
        photoUrl:
          'http://dmssolutions.nl/wp-content/uploads/2013/06/helpdesk.png',
        welcomeMessage: 'Hi there! How can I help you?'
      })

      window.talkSession = new Talk.Session({
        appId: 'tc7Q1y1H',
        me: me
      })

      var inbox = window.talkSession.createInbox({})

      inbox.mount(talkjsContainer.current)
      inbox.toggleDesktopNotifications(true)
      inbox.on('sendMessage', updateList)
      inbox.on('conversationSelected', updateChannel)
    })
  }, [])

  const updateChannel = (item) => {
    const user = UserUtils.getUser()
    console.log(item)
    http({
      api: 'conversations',
      method: 'put',
      params: { agente_id: user.id, status: '02' },
      others: item.conversationId
    })
  }

  return (
    <div className="Chat">
      <Header />

      {/* <div
        style={{ backgroundImage: `url(${background})` }}
        className="chat-maessage"
      >
        <Message />
        <Message right />
      </div> */}

      <div
        className="chat-maessage"
        ref={talkjsContainer}
        id="chat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* <InputSend /> */}
    </div>
  )
}

export default Chat
