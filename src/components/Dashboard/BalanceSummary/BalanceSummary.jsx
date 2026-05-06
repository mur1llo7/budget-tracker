import { useBudget } from '../../../components/Hooks/useBudget';
import { formatCurrency } from '../../Utils/calculations';
import styles from './BalanceSummary.module.css';

function BalanceSummary() {
    const { totals } = useBudget();

    return (
        <div className={styles.wrapper}>
            <div className={styles.balanceCard}>
                <p className={styles.balanceLabel}>Your Balance</p>
                <h2 className={styles.balanceAmount}>
                    {formatCurrency(totals.balance)}
                </h2>
            </div>

        <div className={styles.statsRow}>
            <div className={styles.statCard}>
                <p className={styles.statLabel}>Income</p>
                <p className={`${styles.statValue} ${styles.income}`}>
                    {formatCurrency(totals.income)}
                </p>
            </div>

        <div className={styles.statCard}>
            <p className={styles.statLabel}>Expenses</p>
            <p className={`${styles.statValue} ${styles.expense}`}>
                {formatCurrency(totals.expenses)}
            </p>
        </div>
    </div>
</div>
    );
}

export default BalanceSummary;