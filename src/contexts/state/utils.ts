import { State } from "./reducer";

const EMPTY_STATE: State = {
  appToken: "",
  navigationData: { id: "product" },
  formData: { shares: [] },
  productData: { id: "", name: "", image: "", description: "" },
};

export default EMPTY_STATE;
