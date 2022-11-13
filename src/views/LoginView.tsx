import React, { useCallback } from "react";

import { useStateContext } from "../contexts/state";

import Loader from "../tools/components/Loader";
import useFlag from "../tools/hooks/useFlag";

const LoginView = () => {
  const { dispatch } = useStateContext();

  const [isLoading, handleShowLoader] = useFlag();

  const handleLogin = useCallback(() => {
    handleShowLoader();

    setTimeout(() => {
      dispatch?.({ type: "handleLogin", payload: { id: "userId" } });
    }, 2000);
  }, [dispatch, handleShowLoader]);

  return (
    <div>
      <p>LoginView</p>

      {isLoading ? <Loader>Authenticating...</Loader> : <button onClick={handleLogin}>Sign In</button>}
    </div>
  );
};

export default LoginView;
