import React from 'react'

import Translate from '@components/Translate'

//Styles
import './styles.scss'

const Table = (props) => {
  const { headers = [], data = [] } = props

  const getRow = (object) => {
    return (
      <tr>
        {headers.map(({ field }, index) => {
          return <th key={index}>{object[field]}</th>
        })}
      </tr>
    )
  }

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {headers.map((element, index) => (
              <th key={index}>
                <Translate>{element.name}</Translate>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => getRow(item))}</tbody>
      </table>
    </div>
  )
}

export default Table
