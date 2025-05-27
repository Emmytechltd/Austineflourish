document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Validate form inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");
  
    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return;
    }
  
    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function(response) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      document.getElementById("contact-form").reset();
    }, function(error) {
      status.textContent = "Failed to send message. Please try again.";
      status.style.color = "red";
    });
  });
  