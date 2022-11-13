import React from "react";

import { BaseDialogProps } from "../tools/components/Dialog";

import AppContainer from "./AppContainer";
import AuthContainer from "./AuthContainer";
import Router from "./Router";
import { InitialState, StateProvider } from "./state";

interface Props extends BaseDialogProps {
  initialState: InitialState;
}

const AppProviders = ({ isOpen, onClose, initialState }: Props) => {
  return (
    <StateProvider initialState={initialState}>
      <AppContainer isOpen={isOpen} onClose={onClose}>
        <AuthContainer>
          <Router />
        </AuthContainer>
      </AppContainer>
    </StateProvider>
  );
};

export default AppProviders;
