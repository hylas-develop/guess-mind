/* eslint-disable no-unused-expressions */
const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");
const nickname = localStorage.getItem("nickname");

const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const login = (nickname) => {
  // eslint-disable-next-line no-undef
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, { nickname });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem("nickname", value);
  login(value);
  body.className = LOGGED_IN;
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
