import { createContext, Dispatch } from "react";

import { State, StateReducerAction } from "./reducer";

interface StateContextProps {
  state: State;
  dispatch: Dispatch<StateReducerAction>;
}

const StateContext = createContext<StateContextProps | null>(null);

export default StateContext;
