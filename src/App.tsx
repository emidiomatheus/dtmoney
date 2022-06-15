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

Modal.setAppElement('#root');

export function App() {
  const [theme, setTheme] = useState(dark)
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
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