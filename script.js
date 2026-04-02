document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  const allowedEmail = 'plpurugwiro@gmail.com';
  const allowedPassword = 'urugwiro';

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value.trim();

      if (email === allowedEmail && password === allowedPassword) {
        loginMessage.textContent = 'Login successful. Redirecting...';
        loginMessage.style.color = 'lightgreen';
        setTimeout(() => {
          window.location.href = '/member.html';
        }, 400);
      } else {
        loginMessage.textContent = 'Invalid credentials. Use the allowed email and password.';
        loginMessage.style.color = 'tomato';
      }
    });
  }
});
