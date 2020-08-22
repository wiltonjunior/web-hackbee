import React from 'react'
import { IconButton } from '@material-ui/core'

import Icon from '@components/Icon'
import Table from '@components/Table'

import Header from './components/Header'

import array from './data.js'

import './styles.scss'

const List = () => {
  const headers = [
    {
      name: 'Nome',
      field: 'name'
    },
    {
      name: 'Canal',
      field: 'channel'
    },
    {
      name: 'Avaliação',
      field: 'note'
    },
    {
      name: 'Opção',
      component: () => {
        return (
          <IconButton>
            <Icon size={30} name="delete" />
          </IconButton>
        )
      }
    }
  ]
  return (
    <div className="List">
      <div className="list-header">
        <Header />
      </div>
      <div className="list-main">
        <Table headers={headers} data={array} />
      </div>
    </div>
  )
}

export default List
