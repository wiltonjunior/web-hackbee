export default [
  {
    icon: 'message',
    router: '/',
    name: 'SIDERBAR_CHAT',
    permission: ['client', 'admin', 'agent', 'manager']
  },
  {
    icon: 'dashbord',
    router: '/report',
    name: 'SIDERBAR_DASHBORD',
    permission: ['client', 'admin', 'manager']
  },
  {
    icon: 'users',
    router: '/users',
    name: 'SIDERBAR_USERS',
    permission: ['client', 'admin', 'manager']
  },
  {
    icon: 'settings',
    router: '/channel',
    name: 'SIDERBAR_SETTINGS',
    permission: ['client', 'admin', 'manager']
  },
  {
    icon: 'sales',
    router: '/clients',
    permission: ['master'],
    name: 'SIDERBAR_SETTINGS'
  }
]
