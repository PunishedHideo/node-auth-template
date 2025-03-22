import Credentials from './credentials.dto.js';

const signUp = document.getElementById('button-signup');

signUp.addEventListener('click', async function () {
  const login = document.getElementById('login-input').value;
  const password = document.getElementById('password-input').value;

  if (login && password) {
    if (/^[a-zA-Z0-9_]{4,20}$/.test(login)) {
      // api request to backend to check
      // NOTE api request will be done to localhost api for testing now
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/.test(
          password
        )
      ) {
        const credentialsSender = async () => {
            const credentialsDto = new Credentials(login, password);
            const result = await Credentials.signUp(credentialsDto);
            window.alert('') // for some reason window.alert() doesn't work here
            // NOTE can skip this for now because it isn't crucial to the backend(which is the main goal)

            // TODO maybe can make something different with frontend to show that sign in is successful
            // without using window alert
          }
          await credentialsSender();
      } else {
        window.alert(
          'Password must be 8 to 50 characters long without spaces, contain at least one number and one special symbol'
        );
      }
    } else {
      window.alert(
        'Login must be 4 to 20 characters long without spaces, and contain at least one number'
      );
    }
  } else {
    window.alert('Please input login and password');
  }
});
