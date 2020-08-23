import React from 'react'

import * as Material from '@material-ui/lab'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import Utils from '@utils'

import './styles.scss'

const useStyles = makeStyles((theme) => ({
  small: {
    marginRight: 10,
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}))

const Autocomplete = (props = {}) => {
  const {
    value = '',
    name,
    label,
    variant,
    nameText,
    InputProps,
    array = [],
    nameValue = '',
    handleChange,
    disabled
  } = props

  const onChange = (event, item) => {
    event.target = {
      ...event.target,
      name,
      item,
      value: Utils.getValue(item, nameValue)
    }
    handleChange(event)
  }

  const getOptionLabel = (option) => {
    if (typeof option === 'string') {
      return option
    }
    if (option.inputValue) {
      return option.inputValue
    }
    return option[nameText]
  }

  const text = array.find(item => item[nameValue] === value);

  return (
    <Material.Autocomplete
      value={text}
      options={array}
      onChange={onChange}
      disabled={disabled}
      className="Autocomplete"
      getOptionLabel={getOptionLabel}
      renderOption={(option) => option[nameText]}
      renderInput={(params) => <TextField {...params} variant={variant} label={label} />}
    />
  )
}

Autocomplete.defaultProps = {
  value: '',
  array: [],
  nameValue: ''
}

export default Autocomplete
