import React, { ReactNode, useReducer } from "react";

import reducer, { InitialState } from "./reducer";
import StateContext from "./StateContext";

interface Props {
  initialState: InitialState;
  children: ReactNode;
}

const StateProvider = ({ initialState, children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    navigationData: { id: "product" },
    formData: { shares: [] },
  });

  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};

export default StateProvider;
