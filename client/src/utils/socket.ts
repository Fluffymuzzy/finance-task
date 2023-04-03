import { SERVER_URL } from "./constants";
import { io } from "socket.io-client";
import { SocketEvents } from "src/store/types";
import React from "react";

const url = SERVER_URL;

export const socket = io(url);
export const SocketContext: React.Context<SocketEvents> = React.createContext(
  socket
);
