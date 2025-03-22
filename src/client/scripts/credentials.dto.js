export default class Credentials {
  constructor(login, password) {
    (this.login = login), (this.password = password);
  }

  static async signUp(credentialsDto) {
    const { login, password } = credentialsDto;
    // validate login in db to check if it is present
    const request = fetch('http://127.0.0.1:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    const data = (await request).json();
    return data;
    // if present - show window alert error
    // if not - succesful signup and create new db user
}

  static async signIn(credentialsDto) {
    const { login, password } = credentialsDto;
    // validate login in db to check if it is present
    const request = fetch('http://127.0.0.1:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: login,
        password: password,
      }),
    });
    const data = (await request).json();
    return data;
    // if present - show window alert error
    // if not - succesful signup and create new db user
  }
}
