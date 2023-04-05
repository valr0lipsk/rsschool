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
  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  if (!isOpen) return null;
  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal} onClick={(e) => handleModalClick(e)}>
        <div className={styles.header}>
          {title && <p>{title}</p>}
          <button onClick={onClose} className={styles.button}>
            x
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
