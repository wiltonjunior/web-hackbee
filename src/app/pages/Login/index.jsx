import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import Icon from '@components/Icon'
import Input from '@components/Input'
import Image from '@components/Image'

import tok from '@svg/tok.svg'
import background from '@images/png/login.png'

import './styles.scss'

const Login = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="Login">
      <div className="login-logo">
        <Image src={tok} />
      </div>
      <div className="login-main">
        <div className="login-main-header">
          <h3>Bem-vindo de volta !</h3>
          <p>
            Insira suas credenciais e inicie uma <span>Talk</span> :D
          </p>
        </div>
        <div className="login-main-content">
          <div className="login-main-content-main">
            <Input
              shrink
              label="Email"
              startAdornment={
                <InputAdornment position="start">
                  <Icon size={30} name="user" />
                </InputAdornment>
              }
            />
            <Input
              label="Senha"
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <Icon size={30} name="look" />
                </InputAdornment>
              }
            />
          </div>
          <a> Esqueceu sua senha?</a>
        </div>
        <div className="login-main-footer">
          <button>Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default Login
