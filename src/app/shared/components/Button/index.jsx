import React from 'react'
import clsx from 'clsx'

import Translate from '@components/Translate'

import './styles.scss'

const Button = (props) => {
  const { icon, basic } = props

  const styles = clsx('Button', { basic })

  return (
    <button {...props} className={styles}>
      <div className="button-icon">
      {icon ? icon() : null}
      </div>
      <Translate>{props.children}</Translate>
    </button>
  )
}

export default Button
