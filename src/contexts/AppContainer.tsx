import React, { ReactNode, useEffect } from "react";

import Dialog, { BaseDialogProps } from "../tools/components/Dialog";

import { useStateContext } from "./state";

interface Props extends BaseDialogProps {
  children: ReactNode;
}

const AppContainer = ({ isOpen, onClose, children }: Props) => {
  const { dispatch } = useStateContext();

  useEffect(
    () => {
      if (!isOpen) {
        dispatch?.({ type: "handleClose" });
      }
    },
    [isOpen], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div>{children}</div>
    </Dialog>
  );
};

export default AppContainer;
