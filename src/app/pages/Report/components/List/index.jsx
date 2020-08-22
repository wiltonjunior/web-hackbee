import React from 'react'
import Table from '@components/Table'

import array from './data.js'
import Header from './components/Header'

import './styles.scss'

const List = () => {
  const headers = [
    {
      name: 'Nome',
      field: 'name'
    },
    {
      name: 'Esperando',
      field: 'waiting'
    },
    {
      name: 'Em andamento',
      field: 'inProgress'
    },
    {
      name: 'Finalizados',
      field: 'finish'
    },
    {
      name: 'TME',
      field: 'tme'
    },
    {
      name: 'TMA',
      field: 'tma'
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
