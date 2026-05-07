import { useState } from "react";
import { BudgetProvider } from './components/Context/BudgetContext';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import TransactionList from './components/Transactions/TransactionList';
import TransactionForm from './components/TransactionForm/TransactionForm';
import styles from './app.css';

function AppContent() {
  const [view, setView] = useState('dashboard');
  const [editingTx, setEditingTx] = useState(null);

  function handleNavigate(newView) {
    setEditingTx(null);
    setView(newView);
  }

  function handleItemClick(tx) {
    setEditingTx(tx);
    setView('add');
  }

  function handleFormDone() {
    setEditingTx(null);
    setView('transactions');
  }

  return (
    <Layout currentView={view} onNavigate={handleNavigate}>
      {view === 'dashboard' && <Dashboard />}

      {view === 'transactions' && (
        <div className={styles.page}>
          <h1 className={styles.pageTitle}>Transactions</h1>
          <TransactionList onItemClick={handleItemClick}/>
        </div>
      )}

      {view === 'add' && (
        <TransactionForm 
          existing={editingTx}
          onDone={handleFormDone}
        />
      )}
    </Layout>
  );
}

function App() {
  return (
    <BudgetProvider>
      <AppContent />
    </BudgetProvider>
  );
}

export default App;