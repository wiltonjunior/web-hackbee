import React from 'react'
import Grid from '@material-ui/core/Grid'

import Input from '@components/Input'
import Filter from '@components/Filter'
import Button from '@components/Button'
import Icon from '@components/Icon'

import './styles.scss'

const Header = () => {
  const array = [
    { label: 'CHAT_BOX_LIST_FILTER_HEADER_IN_PROGRESS', value: 'IN_PROGRESS' }
  ]
  return (
    <div className="Header">
      <Grid container spacing={1}>
        <Grid item className="header_select">
          <Filter />
        </Grid>
        <Grid item xs className="header_select">
          <Input
            translate
            array={array}
            value="IN_PROGRESS"
            nameValue="value"
            nameText="label"
            type="select"
          />
        </Grid>
        <Grid item xs className="header_select">
          <Input
            translate
            array={array}
            value="IN_PROGRESS"
            nameValue="value"
            nameText="label"
            type="select"
          />
        </Grid>
        <Grid item xs={2} className="header_select">
          <Button icon={() => <Icon name="plus" />}>Novo usuário</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
