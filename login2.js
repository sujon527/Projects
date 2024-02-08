
  function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
      }
   else if (username =="admin"&& password =="123456") {
      alert('Login successful');
    } 
    else {
      alert('Please Enter valid username or password');
    }
  }
  function forgotPassword() {
    alert('Forgot Password? Please contact support for assistance.');
  }
