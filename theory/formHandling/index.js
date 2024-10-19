const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target["email"].value;
  const password = event.target["password"].value;

  passwordError.innerHTML = "";

  if (password.length < 6) {
    return alert("Password must be atleast 6 characters!");
  }

  //   if (!/[a-z]/.test(password)) {
  //     return alert("Atleast 1 small character is required in password!");
  //   }

  //   if (!/[A-Z]/.test(password)) {
  //     return alert("Atleast 1 capital character is required in password!");
  //   }

  //   if (!/[0-9]/.test(password)) {
  //     return alert("Atleast 1 digit is required in password!");
  //   }

  if (!/[a-z][A-Z][0-9]/.test(password)) {
    // return alert(
    //   "Atleast 1 small character, 1 capital character and 1 digit is required in password!"
    // );
    return (passwordError.innerHTML = `<span style="color:red">Atleast 1 small character, 1 capital character and 1 digit is required in password!</span>`);
  }

  fetch("http://localhost:5501/login", {
    body: JSON.stringify({ email, password }),
    method: "POST"
  });
}
