import React from 'react';

export interface BaseButton {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const BaseButton: React.FC<BaseButton> = ({ children, onClick, variant = 'primary' }) => {
  const style: React.CSSProperties = {
    padding: '10px 16px',
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  };

  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};
