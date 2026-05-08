import { useBudget } from "../../../components/Hooks/useBudget";
import { formatCurrency } from "../../../components/Utils/calculations";
import styles from "./BalanceSummary.module.css";

function BalanceSummary() {
  const { totals } = useBudget();

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className={styles.wrapper}>
      <div className={styles.greeting}>
        <p className={styles.greetingText}>{greeting}</p>
        <h2 className={styles.greetingName}>Carlos</h2>
      </div>

      <div className={styles.balanceCard}>
        <p className={styles.balanceLabel}>Your Balance</p>
        <h2 className={styles.balanceAmount}>
          {formatCurrency(totals.balance)}
        </h2>
        <p className={styles.balanceSubtitle}>
          {formatCurrency(totals.expenses)} spent this month
        </p>

        <div className={styles.statsRow}>
          <div className={styles.statPill}>
            <p className={styles.statLabel}>Income</p>
            <p className={`${styles.statValue} ${styles.income}`}>
              {formatCurrency(totals.income)}
            </p>
          </div>
          <div className={styles.statPill}>
            <p className={styles.statLabel}>Balance</p>
            <p className={styles.statValue}>{formatCurrency(totals.balance)}</p>
          </div>
          <div className={styles.statPill}>
            <p className={styles.statLabel}>Expense</p>
            <p className={`${styles.statValue} ${styles.expense}`}>
              {formatCurrency(totals.expenses)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSummary;
