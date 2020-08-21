import React from 'react'
import Grid from '@material-ui/core/Grid'

import List from './components/List'
import Chat from './components/Chat'

import './styles.scss'

const Box = () => {
  return (
    <div className="Box">
      <Grid container>
        <Grid className="pd-0" item xs>
          <List />
        </Grid>
        <Grid className="pd-0" item xs={7}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  )
}

export default Box
