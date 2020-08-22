import React from 'react'
import Grid from '@material-ui/core/Grid'

import List from './components/List'
import CardClient from './components/CardClient'
import HeaderUsers from './components/HeaderUsers'

import './styles.scss'

const Users = () => {
  return (
    <div className="Users">
      <HeaderUsers />
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <List />
        </Grid>
        <Grid item xs={3}>
          <CardClient />
        </Grid>
      </Grid>
    </div>
  )
}

export default Users
