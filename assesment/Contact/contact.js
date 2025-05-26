// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
  
    // Clear previous message
    const message = document.getElementById('formMessage');
    message.textContent = '';
    message.style.color = '';
  
    // Get values
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
  
    // Validate fields
    if (!fname) {
      showMessage('Please enter your first name.', 'red');
      return;
    }
    if (!lname) {
      showMessage('Please enter your last name.', 'red');
      return;
    }
    if (!email) {
      showMessage('Please enter your email.', 'red');
      return;
    }
    if (!validateEmail(email)) {
      showMessage('Please enter a valid email address.', 'red');
      return;
    }
    if (!subject) {
      showMessage('Please write a subject/message.', 'red');
      return;
    }
  
    // If all validations pass:
    showMessage('Thank you for contacting us, ' + fname + '! We will get back to you shortly.', 'green');
  
    // Optionally, reset the form
    this.reset();
  
    // Here you could add code to send data to server using AJAX/fetch if desired
  });
  
  function showMessage(msg, color) {
    const message = document.getElementById('formMessage');
    message.textContent = msg;
    message.style.color = color;
  }
  
  function validateEmail(email) {
    // Simple email regex validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  