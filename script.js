function validateLogin(event) {
  event.preventDefault(); // supaya tidak reload halaman

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Data login contoh (bisa kamu ubah)
  const validUser = "admin";
  const validPass = "12345";

  if (username === validUser && password === validPass) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html"; // pindah ke halaman baru
  } else {
    alert("Invalid username or password!");
  }
}
