export default {
  api: {
    endpoints: {
      clientes: {
        url: 'clientes'
      },
      users: {
        url: 'users'
      },
      login: {
        url: 'login'
      },
      channels: {
        url: 'channels'
      },
      departments: {
        url: 'departments'
      },
      register: {
        url: 'register'
      },
      report: {
        url: 'relatorios',
        status: {
          url: 'relatorios/status'
        },
        top: {
          url: 'relatorios/top'
        },
        departamentos: {
          url: 'relatorios/departamentos'
        },
        conversations: {
          url: 'relatorios/conversations'
        }
      },
      conversations: {
        url: 'conversations'
      }
    }
  },
  user: {
    lang: 'pt-BR'
  },
  TokenSession: 'PRIECSDON695FN54',
  ObjectSession: 'R6543N56776N4345H',
  Routes: {
    Publics: ['/login', '/login/']
  }
}
