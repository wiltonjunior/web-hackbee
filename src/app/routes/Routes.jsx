import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// import Login from '@pages/Login'
// import Chat from '@pages/Chat'
// import Report from '@pages/Report'
import Login from '@pages/Login'
import NotFount from '@pages/NotFount'

import { UserValidate, UserConsumer } from '@contexts/User'

import Layout from '@components/Layout'

export default () => (
  <Switch>
    <Route path="/" component={Login} />
    <Route path="/">
      {(props) => (
        <UserConsumer>
          {({ user }) => (
            <Layout user={user} {...props}>
              {/* <UserValidate {...props} /> */}
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
