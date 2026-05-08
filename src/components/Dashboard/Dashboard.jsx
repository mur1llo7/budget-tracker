import BalanceSummary from './BalanceSummary/BalanceSummary'
import SpendingChart from './SpendingChart/SpendingChart';
import TransactionList from '../Transactions/TransactionList';
import { useBudget } from '../../components/Hooks/useBudget';
import { formatCurrency } from '../../components/Utils/calculations';
import styles from './Dashboard.module.css';

function DesktopSummaryCards() {
  const { totals } = useBudget();
  return (
    <div className={styles.summaryRow}>
      <div className={styles.summaryCard}>
        <p className={styles.summaryLabel}>Total Balance</p>
        <p className={styles.summaryValue}>{formatCurrency(totals.balance)}</p>
      </div>
      <div className={styles.summaryCard}>
        <p className={styles.summaryLabel}>Income</p>
        <p className={`${styles.summaryValue} ${styles.income}`}>
          {formatCurrency(totals.income)}
        </p>
      </div>
      <div className={styles.summaryCard}>
        <p className={styles.summaryLabel}>Expense</p>
        <p className={`${styles.summaryValue} ${styles.expense}`}>
          {formatCurrency(totals.expenses)}
        </p>
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function Dashboard({ onNavigateToTransactions }) {
  return (
    <div className={styles.wrapper}>
      {/* Mobile layout */}
      <div className={styles.mobileOnly}>
        <BalanceSummary />
        <SpendingChart />
      </div>

      {/* Desktop layout */}
      <div className={styles.desktopOnly}>
        <DesktopSummaryCards />
        <div className={styles.contentGrid}>
          <SpendingChart />
          <div className={styles.recentCard}>
            <h3 className={styles.recentTitle}>Recent Transactions</h3>
            <TransactionList
              onItemClick={() => {}}
              limit={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;