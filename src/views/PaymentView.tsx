import React, { useCallback } from "react";

import { useStateContext } from "../contexts/state";

import Loader from "../tools/components/Loader";
import useFlag from "../tools/hooks/useFlag";

const PaymentView = () => {
  const {
    state: {
      userData,
      formData: { draft },
    },
    dispatch,
  } = useStateContext();

  const [isLoading, handleShowLoader] = useFlag();

  const handleClick = useCallback(() => {
    handleShowLoader();

    // TODO: post data and get updated data
    if (userData && draft?.share) {
      setTimeout(() => {
        dispatch?.({ type: "handlePay", payload: [{ user: userData, percentage: draft.share }] });
      }, 2000);
    }
  }, [dispatch, draft?.share, handleShowLoader, userData]);

  return (
    <div>
      <p>PaymentView</p>

      {isLoading ? (
        <Loader />
      ) : (
        <button disabled={!draft?.share} onClick={handleClick}>
          Pay
        </button>
      )}
    </div>
  );
};

export default PaymentView;
