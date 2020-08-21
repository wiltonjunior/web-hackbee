import React from 'react'

import clsx from 'clsx';

import Tag from '@components/Tag';
import Image from '@components/Image';

import avatar1 from '@images/png/avatar1.png'

import './styles.scss'

const CardUser = (props) => {

  const {active} = props

  const styles = clsx('CardUser', { active })

  return (
    <div className={styles}>
      <div className="image_carduser">
        <Image src={avatar1} />
      </div>
      <div className="carduser_content">
        <div className="carduser_header">
          <p className="user">Matheus Mendes</p>
          <p>Segunda</p>
        </div>
        <div className="carduser_main">
          <p>
            Boa noite, estou com problema...
          </p>
        </div>
        <div className="carduser_footer">
          <Tag>Mossoró</Tag>
          <Tag>Entregador</Tag>
        </div>
      </div>
    </div>
  )
}

export default CardUser
