import React from 'react';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

function Modal({ isOpen, onClose, children, title }: Props) {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.modal}>
      <div className="header">
        {title && <p>{title}</p>}

        <button onClick={onClose} className={styles.button}>
          x
        </button>
      </div>
      {children}
    </div>,
    document.body
  );
}

export default Modal;
