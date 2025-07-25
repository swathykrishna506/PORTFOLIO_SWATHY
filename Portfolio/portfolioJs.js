// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Send email with SMTP.js
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  Email.send({
    SecureToken: "YOUR_SMTPJS_SECURE_TOKEN",
    To: "swathikrishna506@gmail.com",
    From: "your_verified_email@example.com",
    Subject: `Portfolio Feedback from ${name}`,
    Body: `
      <strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Message:</strong><br/>${message}
    `
  }).then(
    response => alert("Thank you! Your message was sent successfully."),
    error => alert("Sorry! Something went wrong. Please try again.")
  );
}
