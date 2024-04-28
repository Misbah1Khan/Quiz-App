document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('check');
    const loginForm = document.querySelector('.login.form');
    const signupForm = document.querySelector('.registration.form');

    check.addEventListener('change', function () {
      if (this.checked) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
      } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
      }
    });
  });

  function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = '123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      
      window.location.href = "home.html";
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

  function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = '123';

    if (email === hardcodedEmail) {
      alert('Email already exists. Please choose a different one.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    alert('Signup successful!');
  }


  function join(){
   window.location.href = "quiz.html"

  }

  function start(){
    window.location.href = "htq.html"
 
   }
 
   
  function set(){
    window.location.href = "cssq.html"
 
   }

   function ready(){
    window.location.href = "jsq.html"
 
   }