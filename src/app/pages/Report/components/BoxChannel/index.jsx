import React from 'react'
import Grid from '@material-ui/core/Grid'

import CardChannel from './components/CardChannel'

import './styles.scss'

const BoxChannel = () => {
  const array = [
    {
      icon: 'dot',
      title: 'Esperando',
      content: () => <div className="number">180</div>
    },
    {
      icon: 'comment',
      title: 'Em atendimento',
      content: () => <div className="number">85</div>
    },
    {
      icon: 'task',
      title: 'Finalizados',
      content: () => <div className="number">254</div>
    },
    {
      icon: 'clock',
      title: 'TME e TMA',
      content: () => (
        <div className="time">
          <p>00:55:14</p>
          <p>00:22:15</p>
        </div>
      )
    }
  ]

  return (
    <div className="BoxChannel">
      <div className="box-channel-header">
        <h4>Dados do canal</h4>
      </div>
      <div className="box-channel-main">
        <Grid container spacing={3}>
          {array.map((item, index) => (
            <Grid key={index} item xs={6}>
              <CardChannel item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default BoxChannel
