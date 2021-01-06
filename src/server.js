import express from "express";
import logger from "morgan";
import { join } from "path";
import socketIO from "socket.io";
import socketController from "./socketCotnroller";
import events from "./events";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home", { events: JSON.stringify(events) });
});

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
  socketController(socket);
});
