import React, { useMemo } from "react";

import { useStateContext } from "../contexts/state";

const SuccessView = () => {
  const {
    state: {
      formData: { shares },
    },
  } = useStateContext();

  const isCompleted = useMemo(() => 100 === shares.reduce((acc, current) => acc + current.percentage, 0), [shares]);

  return isCompleted ? <div>SuccessView</div> : <div>ProgressView</div>;
};

export default SuccessView;
