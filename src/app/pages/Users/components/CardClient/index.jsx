import React from 'react'

import Icon from '@components/Icon'
import Input from '@components/Input'
import Image from '@components/Image'
import Button from '@components/Button'

import avatar1 from '@images/png/avatar1.png'

import './styles.scss'

const CardClient = () => {
  const array = [
    {
      name: 'Genente'
    },
    {
      name: 'Genente'
    }
  ]

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
        <div className="cardclient-main-item">
          <Input
            label="E-mail"
            disabled
            variant="standard"
            value="ramon@beedelivery.com.br"
          />
        </div>
        <div className="cardclient-main-item">
          <Input
            variant="standard"
            array={array}
            nameValue="name"
            type="select"
            label="Cargo"
          />
        </div>
        <div className="cardclient-main-item">
          <Input type="add" variant="standard" label="Procurar Canais" />
        </div>
        <div className="cardclient-main-item">
          <Input type="add" variant="standard" label="Procurar Departamentos" />
        </div>
      </div>
      <div className="cardclient-footer">
        <Button icon={() => <Icon name="check" />}>Salvar alterações</Button>
      </div>
    </div>
  )
}

export default CardClient
