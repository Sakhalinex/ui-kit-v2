import type { GlobalProvider } from '@ladle/react';
import './theme.css';

export const Provider: GlobalProvider = ({ children }) => {

  return <>{children}</>;
};
