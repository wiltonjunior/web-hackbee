import React from 'react'

import Icon from '@components/Icon'
import Image from '@components/Image'
import Button from '@components/Button'
import avatar1 from '@images/png/avatar1.png'

import './styles.scss'

const Header = () => {
  return (
    <div className="Header">
      <div className="header-avatar">
        <Image src={avatar1} />
        <p>Matheus Mendes</p>
      </div>
      <div className="header-actions">
        <Button basic icon={() => <Icon name="repeat" />}>Transferir</Button>
        <Button icon={() => <Icon name="sent" />}>Iniciar</Button>
      </div>
    </div>
  )
}

export default Header
