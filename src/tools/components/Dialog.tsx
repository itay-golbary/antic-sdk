import React, { ReactNode } from "react";

interface BaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DialogProps extends BaseDialogProps {
  children: ReactNode;
}

const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <dialog open={isOpen} onClose={onClose}>
      {children}
    </dialog>
  );
};

export { BaseDialogProps };
export default Dialog;
