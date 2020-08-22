import React from 'react'

import Header from './components/Header' 
import Message from './components/Message'
import InputSend from './components/InputSend'

import background from '@images/png/background.png'

import './styles.scss'

const Chat = () => {
  return (
    <div className="Chat">
      <Header />
      <div style={{backgroundImage: `url(${background})`}} className="chat-maessage">
        <Message />
        <Message  right/>
      </div>
      <InputSend />
    </div>
  )
}

export default Chat
