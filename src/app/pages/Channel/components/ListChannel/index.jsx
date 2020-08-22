import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'

import Icon from '@components/Icon'
import Table from '@components/Table'
import Button from '@components/Button'
import ConfirmModal from '@components/ConfirmModal'

import Header from './components/Header'

import array from './data.js'

import './styles.scss'

const ListChannel = (props) => {
  const [open, setOpen] = useState(false)

  const { setUser } = props

  const headers = [
    {
      name: 'Nome',
      field: 'name'
    }
  ]

  const getUser = (user) => {
    setUser(user)
  }

  const toggle = () => {
    setOpen(!open)
  }

  const actions = () => {
    return (
      <div className="buttons_modal">
        <Button basic onClick={toggle}>
          Cancelar
        </Button>
        <Button background="#FC5A5A" icon={() => <Icon name="trash" />}>
          Excluir usuário
        </Button>
      </div>
    )
  }

  return (
    <div className="ListChannel">
      <div className="list-header">
        <Header />
      </div>
      <div className="list-main">
        <Table onClick={getUser} headers={headers} data={array} />
      </div>
      <ConfirmModal
        open={open}
        close={toggle}
        actions={actions}
        title="Tem certeza disto?"
        subtitle="Você tem certeza que deseja remover esse usuário, caso exclua, todos os dados relacionados a ele excluídos."
      />
    </div>
  )
}

export default ListChannel
