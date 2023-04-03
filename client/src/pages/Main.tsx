import { useCallback, useContext, useEffect } from "react";
import { QuotesTypes } from "src/store/types";
import {
  SERVER_CONNECT_EVENT,
  SERVER_TICKER_EVENT,
  SERVER_START_EVENT,
  SERVER_CHANGE_INTERVAL_EVENT,
} from "src/utils/constants";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setQuotes } from "src/store/slice";
import { selectFetchInterval } from "src/store/selectors";
import { SocketContext } from "src/utils/socket";
import QuotesList from "src/components/QuotesList/QuotesList";

const Main = () => {
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const fetchInterval = useAppSelector(selectFetchInterval);

  const handleSetQuotes = useCallback(
    (data: QuotesTypes[]) => {
      dispatch(setQuotes(data));
    },
    [dispatch]
  );

  useEffect(() => {
    if (socket) {
      socket.on(SERVER_CONNECT_EVENT, () => {
        socket.emit(SERVER_START_EVENT);
      });
      socket.on(SERVER_TICKER_EVENT, handleSetQuotes);

      socket.on("connect_error", function (err) {
        if (err) {
          dispatch(setQuotes([]));
        }
      });
    }
    return () => {
      socket && socket.off(SERVER_TICKER_EVENT, handleSetQuotes);
    };
  }, [socket, handleSetQuotes, dispatch]);

  useEffect(() => {
    if (socket) {
      socket.emit(SERVER_CHANGE_INTERVAL_EVENT, fetchInterval * 1000);
    }
    return () => {};
  }, [fetchInterval, socket]);

  return (
    <div className="container mx-auto">
      <QuotesList />
    </div>
  );
};

export default Main;
