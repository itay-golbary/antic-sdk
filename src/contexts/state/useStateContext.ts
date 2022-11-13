import { Dispatch, useContext } from "react";

import { State, StateReducerAction } from "./reducer";
import StateContext from "./StateContext";
import EMPTY_STATE from "./utils";

interface UseStateContextReturn {
  state: State;
  dispatch?: Dispatch<StateReducerAction>;
}

type UseStateContext = () => UseStateContextReturn;

const useStateContext: UseStateContext = () => {
  const stateContext = useContext(StateContext);

  return {
    state: stateContext?.state ?? EMPTY_STATE,
    dispatch: stateContext?.dispatch,
  };
};

export default useStateContext;
