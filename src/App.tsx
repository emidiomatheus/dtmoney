import { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { GlobalStyle } from "./styles/global";
import usePersistedState from './utils/usePersistedState';

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = usePersistedState('theme', dark)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toggleTheme={toggleTheme} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  );
}