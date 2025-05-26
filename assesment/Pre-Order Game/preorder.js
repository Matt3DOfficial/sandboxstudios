document.getElementById('preOrderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const quantity = document.getElementById('quantity').value;
  
    // Simple validation
    if (!name || !email) {
      displayMessage('Please fill in all required fields.', 'red');
      return;
    }
  
    // Basic email validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      displayMessage('Please enter a valid email address.', 'red');
      return;
    }
  
    // If valid, show confirmation
    displayMessage(`Thank you, ${name}! Your pre-order of ${quantity} item(s) has been received.`, 'green');
  
    // Optional: reset the form
    this.reset();
  });
  
  function displayMessage(msg, color) {
    const messageElem = document.getElementById('message');
    messageElem.textContent = msg;
    messageElem.style.color = color;
  }
  