import React from 'react'

import CardAgent from './components/CardAgent'

import './styles.scss'

const BoxAgents = () => {
  const array = [
    {
      count: '5012',
      user: {
        name: 'Ana Clara',
        description: 'Suporte de TI'
      }
    },
    {
      count: '4158',
      user: {
        name: 'Rodrigo Lima',
        description: 'Fortaleza-CE'
      }
    },
    {
      count: '3589',
      user: {
        name: 'Tiago Nunes',
        description: 'Manaus-AM'
      }
    }
  ]

  return (
    <div className="BoxAgents">
      <div className="box-agents-header">
        <h4>Top 3 agentes</h4>
      </div>
      <div className="box-agents-main">
        {array.map((item, index) => (
          <CardAgent key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default BoxAgents
