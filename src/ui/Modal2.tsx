import { createPortal } from "react-dom";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  footer,
  title,
}: ModalProps) {
  const ModalComp = (
    <dialog>
      <article></article>
    </dialog>
  );

  return createPortal(ModalComp, document.body);
}
