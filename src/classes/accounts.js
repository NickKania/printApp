const axios = require('axios');
export default class Accounts {
  static registerUser(username, password) {
    axios({
      method: 'post',
      url: baseUrl + "api/users",
      data: {
        name: username,
        password: password,
        active: true,
        admin: false
      }
    })
  }
  signInUser(username, password) {
    //TODO: revisit
  }
}
