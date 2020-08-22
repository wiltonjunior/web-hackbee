import React from 'react'

import 'chart.js'

import './styles.scss'

const CardChannel = (props) => {
  const {item} = props;
  return (
    <div className="CardChannel">
      <div className="chard-channel-header">
        <p>{item.title}</p>
      </div>
      <div className="chard-channel-main">{item.content()}</div>
    </div>
  )
}

export default CardChannel
