// Registration Validation
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let msg = document.getElementById("message");

  if (name === "" || email === "" || password === "") {
    msg.textContent = "All fields are required!";
    msg.style.color = "red";
  } else if (password !== confirmPassword) {
    msg.textContent = "Passwords do not match!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Registration successful!";
    msg.style.color = "green";
  }
});

// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;
  let msg = document.getElementById("loginMsg");

  if (email === "" || password === "") {
    msg.textContent = "Please fill in all fields!";
    msg.style.color = "red";
  } else {
    msg.textContent = "Login successful!";
    msg.style.color = "green";
  }
});
