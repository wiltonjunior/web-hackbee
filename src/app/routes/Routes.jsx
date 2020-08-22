import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '@pages/Login'
import Chat from '@pages/Chat'
import Report from '@pages/Report'
import Users from '@pages/Users'

import NotFount from '@pages/NotFount'

import { UserConsumer } from '@contexts/User'

import Layout from '@components/Layout'

export default () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/">
      {(props) => (
        <UserConsumer>
          {({ user }) => (
            <Layout user={user} {...props}>
              {/* <UserValidate {...props} /> */}
              <Route exact path="/" component={Users} />
              <Route exact path="/s" component={Chat} />
              <Route exact path="/report" component={Report} />
              <Redirect from="*" to="/" />
            </Layout>
          )}
        </UserConsumer>
      )}
    </Route>
    <Route path="/404" component={NotFount} />
    <Redirect from="*" to="/" />
  </Switch>
)
