import React, { useCallback, useMemo } from "react";

import PaymentView from "../views/PaymentView";
import ProductView from "../views/ProductView";
import SuccessView from "../views/SuccessView";

import { useStateContext } from "./state";

const Router = () => {
  const {
    state: { navigationData },
  } = useStateContext();

  const routeId = useMemo(() => navigationData?.id || "product", [navigationData?.id]);

  const View = useCallback(() => {
    switch (routeId) {
      case "product": {
        return <ProductView />;
      }
      case "payment": {
        return <PaymentView />;
      }
      case "success": {
        return <SuccessView />;
      }
    }
  }, [routeId]);

  return <View />;
};

export default Router;
