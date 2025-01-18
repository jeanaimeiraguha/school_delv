document.addEventListener('DOMContentLoaded', () => {
     // Handle registration
     document.getElementById('register-form').addEventListener('submit', async (e) => {
       e.preventDefault();
   
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const password = document.getElementById('password').value;
   
       const response = await fetch('/index.php?endpoint=register', {
         method: 'POST',
         body: JSON.stringify({ name, email, password }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       const result = await response.json();
       console.log(result);
     });
   
     // Handle login
     document.getElementById('login-form').addEventListener('submit', async (e) => {
       e.preventDefault();
   
       const email = document.getElementById('login-email').value;
       const password = document.getElementById('login-password').value;
   
       const response = await fetch('/index.php?endpoint=login', {
         method: 'POST',
         body: JSON.stringify({ email, password }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       const result = await response.json();
       console.log(result);
     });
   
     // Handle contact form
     document.getElementById('contact-form').addEventListener('submit', async (e) => {
       e.preventDefault();
   
       const name = document.getElementById('contact-name').value;
       const email = document.getElementById('contact-email').value;
       const message = document.getElementById('contact-message').value;
   
       const response = await fetch('/index.php?endpoint=contact', {
         method: 'POST',
         body: JSON.stringify({ name, email, message }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       const result = await response.json();
       console.log(result);
     });
   });
   