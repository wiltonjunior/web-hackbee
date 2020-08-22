import React from 'react'

import { LineChart } from 'react-chartkick'

import 'chart.js'

import './styles.scss'

const Chart = () => {
  const itens = {
    '2017-05-13': 2,
    '2017-05-14': 5,
    '2017-05-15': 1,
    '2017-05-16': 3,
    '2017-05-16': 6,
    '2017-05-17': 7,
    '2017-05-18': 4,
    '2017-05-19': 1,
    '2017-05-20': 8,
    '2017-05-21': 2,
    '2017-05-22': 3,
    '2017-05-23': 4,
    '2017-05-24': 6,
    '2017-05-25': 4,
    '2017-05-26': 7,
    '2017-05-27': 2,
    '2017-05-28': 4,
    '2017-05-29': 5,
    '2017-05-30': 3
  }

  return (
    <div className="Chart">
      <div className="chat-header">
        <h4>Fluxo de atendimento do canal</h4>
      </div>
      <div className="chat-main">
        <LineChart download={true} colors={['#8300B9']} data={itens} />
      </div>
    </div>
  )
}

export default Chart
