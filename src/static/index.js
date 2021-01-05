/* eslint-disable no-undef */
const socket = io("/");

socket.on("hello", () => console.log("Somebody said : Hello"));

setTimeout(() => socket.emit("helloGuys"), 5000);
