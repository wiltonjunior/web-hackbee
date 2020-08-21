import React from 'react'
import configs from '@configs'
import { useHistory } from 'react-router-dom'

const { Provider, Consumer } = React.createContext()

const UserConsumer = (props) => {
  return <Consumer>{props.children}</Consumer>
}

const UserProvider = (props) => {
  const user = () => {
    try {
      let user = sessionStorage.getItem(configs.ObjectSession)
      const token = sessionStorage.getItem(configs.TokenSession)
      if (user) return JSON.parse(user)
      if (!token) return null
      return uptateToken()
    } catch (e) {
      console.error(e)
      return null
    }
  }

  const uptateToken = () => {
    let user = sessionStorage.getItem(configs.ObjectSession)
    const token = sessionStorage.getItem(configs.TokenSession)
    if (!token) return null
    user = Buffer.from(token.split('.')[1], 'base64').toString()
    sessionStorage.setItem(configs.ObjectSession, user)
    return JSON.parse(user)
  }

  const value = { user: user }
  return <Provider value={value}>{props.children}</Provider>
}

const UserValidate = (props) => {
  const history = useHistory()

  const isLogged = ({ user: item }) => {
    const token = item()
    const path = props.location.pathname
    const isPublic = configs.Routes.Publics.indexOf(path) > -1
    if (token && !isPublic) {
      const expTime = parseInt(`${token.exp.toString()}000`, 0)
      if (Date.now() >= expTime) {
        history.push('/login')
      }
    } else if (!isPublic) {
      history.push('/login')
    }
    return null
  }

  return <UserConsumer>{isLogged}</UserConsumer>
}

const User = () => {
  return null
}

export { UserProvider, UserConsumer, UserValidate }

export default User
