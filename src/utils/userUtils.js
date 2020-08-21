import Config from '@configs/'

class UserUtils {
  getUser() {
    return JSON.parse(sessionStorage.getItem(Config.ObjectSession))
  }
}

export default new UserUtils()
