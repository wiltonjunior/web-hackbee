import React from 'react'

import Image from '@components/Image'

import avatar1 from '@images/png/avatar1.png'

import 'chart.js'

import './styles.scss'

const CardAgent = (props) => {
  const { item = {} } = props
  const { user = {} } = item
  return (
    <div className="CardAgent">
      <div className="char-agent-user">
        <div className="user">
          <Image src={avatar1} />
        </div>
        <div>
          <div className="user-name">{user.name}</div>
          <div className="user-description">{user.description}</div>
        </div>
      </div>
      <div className="chard-channel-main">
        <div>Atendimentos</div>
        <div>{item.count}</div>
      </div>
    </div>
  )
}

export default CardAgent
