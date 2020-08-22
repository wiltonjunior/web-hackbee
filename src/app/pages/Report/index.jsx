import React from 'react'
import Grid from '@material-ui/core/Grid'

import Chart from './components/Chart'
import HeaderReport from './components/HeaderReport'
import BoxChannel from './components/BoxChannel'
import BoxAgents from './components/BoxAgents'
import List from './components/List'

import './styles.scss'

const Report = () => {
  return (
    <div className="Report">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <HeaderReport />
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <BoxChannel />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <BoxAgents />
        </Grid>
        <Grid item xs={7}>
          <List />
        </Grid>
      </Grid>
    </div>
  )
}

export default Report
