import React, { useEffect, useState, useRef } from 'react'

import TextField from '@material-ui/core/TextField'

import clsx from 'clsx'
import Translate, { dict } from '@components/Translate'

import Add from './components/Add'
import File from './components/File'
import Select from './components/Select'
import TextArea from './components/TextArea'
import Checkbox from './components/Checkbox'
import Password from './components/Password'
import DatePicker from './components/DatePicker'
import Autocomplete from './components/Autocomplete'
import MultipleSelect from './components/MultipleSelect'

import './styles.scss'

const Input = (props) => {
  const inputRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef])

  const onChange = (event) => {
    const { positive } = props
    if (typeof props.onChange === 'function') {
      const { value, type } = event.target
      event.target = {
        ...props,
        ...event.target
      }
      if (type === 'number' && !isNaN(value)) {
        event.target.value = Number(value)
        if (positive && value < 0) {
          event.target.value = 0
        }
      }
      if (value === '') event.target.value = value
      props.onChange(event)
    }
  }

  const label = () => {
    const { label, type } = props
    if (label && type !== 'radio') {
      return <Translate>{String(label)}</Translate>
    } else {
      return null
    }
  }

  const inputProps = () => {
    let {
      icon,
      error,
      shrink,
      disabled,
      readOnly,
      helperText,
      value = '',
      placeholder,
      endAdornment,
      startAdornment,
      variant = 'outlined',
    } = props

    const autoComplete = 'new-password'
    const InputProps = { readOnly, disabled, autoComplete }

    const shrinkValue = shrink || open || value
    const InputLabelProps = { shrink: shrinkValue }

    if (icon) {
      InputProps.endAdornment = endAdornment
    }

    if (startAdornment) {
      InputProps.startAdornment = startAdornment
    }

    return {
      ...props,
      value,
      error,
      autoComplete,
      label: label(),
      variant,
      handleChange: onChange,
      InputProps: InputProps,
      InputLabelProps: InputLabelProps,
      helperText: dict.translate(helperText),
      placeholder: dict.translate(placeholder)
    }
  }

  const switchType = () => {
    let { type } = props
    switch (type) {
      case 'autocomplete':
        return <Autocomplete {...inputProps()} />
      case 'file':
        return <File {...inputProps()} />
      case 'add':
        return <Add {...inputProps()} />
      case 'select':
        return <Select {...inputProps()} />
      case 'date':
        return <DatePicker {...inputProps()} />
      case 'checkbox':
        return <Checkbox {...inputProps()} />
      case 'textarea':
        return <TextArea {...inputProps()} />
      case 'multipleSelect':
        return <MultipleSelect {...inputProps()} />
      case 'password':
        return <Password {...inputProps()} />
      default:
        return <TextField {...inputProps()} onChange={onChange} />
    }
  }

  const onClick = () => {
    setOpen(true)
  }

  const { className } = props

  let classes = clsx('Input', className)

  return (
    <div ref={inputRef} onClick={onClick} className={classes}>
      {switchType()}
    </div>
  )
}

Input.defaultProps = {
  onChange: () => true
}

export default Input
