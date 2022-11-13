import { render } from "@testing-library/react";
import React from "react";

import AppProviders from "./AppProviders";
import EMPTY_STATE from "./state/utils";

describe("test App", () => {
  test("render without errors", () => {
    render(<AppProviders isOpen onClose={() => false} initialState={EMPTY_STATE} />);
  });
});
