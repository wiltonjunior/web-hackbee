import React from 'react'
import Grid from '@material-ui/core/Grid'

import HeaderChannel from './components/HeaderChannel'

import ListChannel from './components/ListChannel'
import ListDepartment from './components/ListDepartment'

import './styles.scss'

const Channel = () => {
  return (
    <div className="Channel">
      <HeaderChannel />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ListChannel/>
        </Grid>
        <Grid item xs>
          <ListDepartment/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Channel
