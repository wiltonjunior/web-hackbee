import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import Login from '@pages/Login'
import Chat from '@pages/Chat'
import NotFount from '@pages/NotFount'

import { UserValidate, UserConsumer } from '@contexts/User'

import Layout from '@components/Layout'

export default () => (
  <Switch>
    <Route path="/">
      {props => (
        <UserConsumer>
          {({ user }) => (
            <Layout user={user} {...props}>
              {/* <UserValidate {...props} /> */}
              <Route path="/" component={Chat} />
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
