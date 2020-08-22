import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import List from './components/List'
import CardClient from './components/CardClient'
import HeaderUsers from './components/HeaderUsers'

import './styles.scss'

const Users = () => {
  const [user, setUser] = useState(null)

  return (
    <div className="Users">
      <HeaderUsers />
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <List setUser={setUser}/>
        </Grid>
        <Grid item xs={3}>
          <CardClient user ={user}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Users
