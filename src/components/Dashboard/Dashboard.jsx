import BalanceSummary from './BalanceSummary/BalanceSummary';
import SpendingChart from './SpendingChart/SpendingChart';
import styles from './Dashboard.module.css'

function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Dashboard</h1>
            <BalanceSummary />
            <SpendingChart />
        </div>
    );
}

export default Dashboard;