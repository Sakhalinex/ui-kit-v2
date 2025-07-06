import React from 'react';
import styles from './BaseButton.module.scss';
import clsx from 'clsx';

export interface BaseButton {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const BaseButton: React.FC<BaseButton> = ({ children, onClick, variant = 'primary' }) => {
  const style: React.CSSProperties = {};

  return (
    <button className={clsx(styles.button, styles[variant])} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
