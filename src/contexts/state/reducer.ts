import EMPTY_STATE from "./utils";

interface NavigationData {
  id: "product" | "payment" | "success";
}

interface AppAuthenticatedData {
  id: string;
  name: string;
}

interface ProductData {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface UserAuthenticated {
  id: string;
}

interface InitialState {
  appToken: string;
  productData: ProductData;
}

interface FormShare {
  user: UserAuthenticated;
  percentage: number;
}

interface FormData {
  draft?: {
    share: number;
  };
  shares: FormShare[];
}

interface State extends InitialState {
  formData: FormData;
  navigationData: NavigationData;
  appData?: AppAuthenticatedData;
  userData?: UserAuthenticated;
}

type StateReducerAction =
  | {
      type: "handleLogin";
      payload: UserAuthenticated;
    }
  | {
      type: "handleAppAuthentication";
      payload: {
        appToken: string;
        appData: AppAuthenticatedData;
      };
    }
  | {
      type: "handleNavigation";
      payload: NavigationData;
    }
  | {
      type: "handleBuy";
      payload: number;
    }
  | {
      type: "handlePay";
      payload: FormShare[];
    }
  | {
      type: "handleClose";
    };

type StateReducer = (state: State, action: StateReducerAction) => State;

const reducer: StateReducer = (state, action) => {
  switch (action.type) {
    case "handleNavigation":
      return {
        ...state,
        navigationData: action.payload,
      };
    case "handleAppAuthentication":
      return {
        ...state,
        ...action.payload,
      };
    case "handleLogin":
      return {
        ...state,
        userData: action.payload,
      };
    case "handleBuy":
      return {
        ...state,
        formData: {
          ...state.formData,
          draft: {
            share: action.payload,
          },
        },
        navigationData: {
          ...state.navigationData,
          id: "payment",
        },
      };
    case "handlePay":
      return {
        ...state,
        formData: {
          shares: action.payload,
        },
        navigationData: {
          ...state.navigationData,
          id: "success",
        },
      };
    case "handleClose":
      return {
        ...EMPTY_STATE,
        appToken: state.appToken,
        appData: state.appData,
        userData: state.userData,
        productData: state.productData,
      };
  }
};

export { NavigationData, InitialState, State, StateReducer, StateReducerAction };
export default reducer;
