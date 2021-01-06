import { handleNewMessage } from "./chat";
import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;
// eslint-disable-next-line import/prefer-default-export
export const getSocket = () => socket;

export const updateSocket = (aSocket) => {
  socket = aSocket;
};

export const initSocket = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
  aSocket.on(events.newMsg, handleNewMessage);
};
