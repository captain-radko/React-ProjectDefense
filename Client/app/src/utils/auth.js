class Auth {
  
    static isUserAdmin () {
      let roles = window.localStorage.getItem('roles')
      if (!roles) {
        return false
      }
  
      roles = roles.split(',')
      if (roles.includes('Admin')) {
        return true
      }
  
      return false
    }
  }
  
  export default Auth