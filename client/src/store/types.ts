import { Socket } from "socket.io-client";

export type QuotesTypes = {
  ticker: string;
  exchange: string;
  price: string;
  change: number;
  change_percent: number;
  dividend: number;
  yield: number;
  last_trade_time: string;
};

type ServerToClientEvents = {
  ticker: (data: QuotesTypes[]) => void;
};

type ClientToServerEvents = {
  start: () => void;
  changeInterval: (num: number) => void;
};

export type SocketEvents = Socket<ServerToClientEvents, ClientToServerEvents>;
