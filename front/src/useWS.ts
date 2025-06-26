import { useEffect } from "react";

export function useWS(count: number) {
  useEffect(() => {
    const WS = new WebSocket("ws://localhost:8080");
    WS.onopen = () => {
      console.log("Here the connection");
    };
    WS.onmessage = (e) => {
      if (e.data === "count?") {
        WS.send(count.toString());
      }
    };

    return () => {
      WS.close();
    };
  }, [count]);
}
