import React from 'react'
import Grid from '@material-ui/core/Grid'

import Box from './components/Box'
import CardClient from './components/CardClient'

import './styles.scss'

const Chat = () => {
  return (
    <div className="Chat">
      <Grid container spacing={3}>
        <Grid className="pd-0" item xs>
          <Box />
        </Grid>
        <Grid className="pd-0" item xs={3}>
          <CardClient />
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat
