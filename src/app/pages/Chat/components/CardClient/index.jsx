import React from 'react'

import Image from '@components/Image'
import Translate from '@components/Translate'

import avatar1 from '@images/png/avatar1.png'

import './styles.scss'

const CardClient = () => {
  return (
    <div className="CardClient">
      <div className="cardclient-header">
        <div className="cardclient-avatar">
          <Image src={avatar1} />
        </div>
        <div className="cardclient-description">
          <h4> Mateus Mendes </h4>
          <p>ID 59856</p>
        </div>
      </div>
      <div className="cardclient-main">
        <div className="cardclient-item">
          <h4>
            <Translate>CHAT_CARDCLIENT_PHONE</Translate>
          </h4>
          <p>99 9 9999999</p>
        </div>
        <div className="cardclient-item">
          <h4>
            <Translate>CHAT_CARDCLIENT_CITY</Translate>
          </h4>
          <p>Mossoró-RN</p>
        </div>
        <div className="cardclient-item">
          <h4>
            <Translate>CHAT_CARDCLIENT_GENDER</Translate>
          </h4>
          <p>Masculino</p>
        </div>
        <div className="cardclient-item">
          <h4>
            <Translate>CHAT_CARDCLIENT_COMMENTS</Translate>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, con- sectetur adipiscing elit.Nulla quis
            lorem ut libero malesuada feugiat.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardClient
