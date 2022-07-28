import { createContext } from "react";

import { Method } from "../types/method";

interface DefaultContext {
  method?: Method;
  setMethod?: (method: Method) => void;
  username?: string;
  setUsername?: (username: string) => void;
}

const defaultState = {
  method: 0 as Method,
};

export const AppContext = createContext<DefaultContext>(defaultState);
