import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideCanvasControls,
  resetCanvas,
  showCanvasControls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerHTML = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerHTML = text;
};

export const handlePlayerUpdate = ({ sockets }) => {
  console.log(sockets);
  addPlayers(sockets);
};
export const handleGameStarted = () => {
  console.log("Game Started Received");
  disableCanvas();
  hideCanvasControls();
  setNotifs("");
};
export const handleLeaderNotif = ({ word }) => {
  console.log("Leader Notif Received");
  disableChat();
  enableCanvas();
  showCanvasControls();
  setNotifs(`You are the leader, paint: ${word}`);
};

export const handleGameEnded = () => {
  setNotifs("Game Ended.");
  resetCanvas();
  hideCanvasControls();
  disableCanvas();
  enableChat();
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon.");
};
