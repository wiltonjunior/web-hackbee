import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Axios from '@components/Axios'
import List from './components/List'
import Chat from './components/Chat'

import './styles.scss'

const Box = ({ item, setItem }) => {
  const [run, setRun] = useState(1)
  const [data, setData] = useState([])

  const updateList = () => {
    setRun(run + 1)
    console.log('top')
  }

  const onSuccess = (data) => {
    setData(data)
  }
  
  return (
    <div className="Box">
      <Axios run={run} api="conversations" onSuccess={onSuccess} load={false}>
        <Grid container>
          <Grid className="pd-0" item xs>
            <List
              object={item}
              setItem={setItem}
              data={data}
              updateList={updateList}
            />
          </Grid>
          <Grid className="pd-0" item xs={7}>
            <Chat item={item} updateList={updateList} />
          </Grid>
        </Grid>
      </Axios>
    </div>
  )
}

export default Box
