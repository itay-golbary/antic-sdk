import React, { ReactNode, useCallback, useEffect, useMemo } from "react";

import Loader from "../tools/components/Loader";
import LoginView from "../views/LoginView";

import { useStateContext } from "./state";

interface Props {
  children: ReactNode;
}

const AuthContainer = ({ children }: Props) => {
  const {
    state: { appData, appToken, userData },
    dispatch,
  } = useStateContext();

  const isAppAuthenticated = useMemo(() => !!appData, [appData]);

  const isUserAuthenticated = useMemo(() => !!userData, [userData]);

  const View = useCallback(
    () =>
      isAppAuthenticated ? (
        isUserAuthenticated ? (
          <>{children}</>
        ) : (
          <LoginView />
        )
      ) : (
        <Loader>Securing Connection..</Loader>
      ),
    [children, isAppAuthenticated, isUserAuthenticated],
  );

  useEffect(
    () => {
      if (appToken) {
        if (!appData) {
          // TODO: authenticate app

          setTimeout(() => {
            dispatch?.({
              type: "handleAppAuthentication",
              payload: {
                appToken,
                appData: { id: "appId", name: "appName" },
              },
            });
          }, 2000);
        }
      } else {
        // TODO: handle error
      }
    },
    [appToken, appData], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return <View />;
};

export default AuthContainer;
