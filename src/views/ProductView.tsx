import React, { ChangeEventHandler, useCallback, useState } from "react";

import { useStateContext } from "../contexts/state";

const ProductView = () => {
  const { dispatch } = useStateContext();

  const [value, setValue] = useState(0);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    let number = parseInt(event.target.value ?? "");

    if (number > 100) {
      number = 100;
    } else if (number < 0) {
      number = 0;
    }

    setValue(number);
  }, []);

  const handleClick = useCallback(() => {
    dispatch?.({ type: "handleBuy", payload: value });
  }, [dispatch, value]);

  return (
    <div>
      <p>ProductView</p>

      <input value={value} onChange={handleChange} type='number' />

      <button disabled={!value} onClick={handleClick}>
        Buy
      </button>
    </div>
  );
};

export default ProductView;
