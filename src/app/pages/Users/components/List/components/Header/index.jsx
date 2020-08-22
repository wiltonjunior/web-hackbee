import React from 'react'
import Grid from '@material-ui/core/Grid'

import Input from '@components/Input'
import Filter from '@components/Filter'
import Button from '@components/Button'
import Icon from '@components/Icon'

import './styles.scss'

const Header = () => {
  const array = [
    { label: 'Todos', value: 'ALL' }
  ]
  return (
    <div className="Header">
      <Grid container spacing={3}>
        <Grid item className="header_select">
          <Filter />
        </Grid>
        <Grid item xs className="header_select">
          <Input
            translate
            array={array}
            // value="ALL"
            nameValue="value"
            nameText="label"
            type="select"
            label="Canal"
          />
        </Grid>
        <Grid item xs className="header_select">
          <Input
            translate
            array={array}
            value="ALL"
            nameValue="value"
            nameText="label"
            type="select"
            label="Departamento"
          />
        </Grid>
        <Grid item className="header_select">
          <Button icon={() => <Icon name="plus" />}>Novo usuário</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header