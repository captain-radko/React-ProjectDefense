class Auth {
  static getUser() {
    const userJson = window.localStorage.getItem('user');

    if (userJson) {
      return JSON.parse(userJson);
    } else {
      return {};
    }
  }

  static isUserAdmin() {
    let user = this.getUser();
    if (user.roles.includes('Admin')) {
      return true;
    }
    return false;
  }
}

export default Auth