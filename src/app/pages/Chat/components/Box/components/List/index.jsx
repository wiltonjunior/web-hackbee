import React from 'react'

import Filter from './components/Filter'
import Header from './components/Header'
import CardUser from './components/CardUser'

import './styles.scss'

const List = () => {
  return (
    <div className="List">
      <Header />
      <Filter />
      <div className="list-content">
        <CardUser active />
        <CardUser />
        <CardUser />
      </div>
    </div>
  )
}

export default List
