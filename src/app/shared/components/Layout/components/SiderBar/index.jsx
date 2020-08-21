import React, { useState } from 'react'

import clsx from 'clsx'
import { Link } from 'react-router-dom'

import Icon from '@components/Icon'
import Image from '@components/Image'
import Translate from '@components/Translate'

import logo from '@svg/logo.svg'
import avatar2 from '@images/png/avatar2.png'

import './styles.scss'

const SiderBar = (props) => {
  const [active, setActive] = useState(0)

  const routes = [
    {
      icon: 'message',
      name: 'SIDERBAR_CHAT'
    },
    {
      icon: 'dashbord',
      name: 'SIDERBAR_DASHBORD'
    },
    {
      icon: 'users',
      name: 'SIDERBAR_USERS'
    },
    {
      icon: 'settings',
      name: 'SIDERBAR_SETTINGS'
    }
  ]
  return (
    <div className="SiderBar">
      <div className="sidebar-header">
        <div className="sidebar-header__logo">
          <Image src={logo} />
        </div>
        <div className="sidebar-header__routes">
          {routes.map((item, index) => (
            <span className={clsx({ active: index === active })} key={index}>
              <Icon size={30} name={item.icon} />
            </span>
          ))}
        </div>
      </div>
      <div className="sidebar-footer">
        <div className="user">
          <Image src={avatar2} />
        </div>
        <div className="exit">
          <Translate>SIDERBAR_EXIT</Translate>
        </div>
      </div>
    </div>
  )
}

export default SiderBar
