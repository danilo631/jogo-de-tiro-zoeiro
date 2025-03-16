import { auth } from "../firebase";

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "lobby.html"; // Redireciona para o lobby
    })
    .catch((error) => alert(error.message));
};

document.querySelector("#loginBtn").addEventListener("click", login);

