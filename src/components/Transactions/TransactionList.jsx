import { useBudget } from '../Hooks/useBudget';
import { groupByDate } from '../Utils/calculations';
import TransactionGroup from './TransactionGroup';
import styles from './Transactions.module.css'

function TransactionList({ onItemClick }) {
    const { transactions } = useBudget();
    const grouped = groupByDate(transactions);
    const dates = Object.keys(grouped);

if (dates.length === 0) {
    return (
        <div className={styles.empty}>
            <p>No Transactions yet.</p>
            <p>Add your first one!</p>
        </div>
    );
}

    return (
        <div className={styles.list}>
            {dates.map(date => (
                <TransactionGroup
                key={date}
                date={date}
                transactions={grouped[date]}
                onItemClick={onItemClick}
                />
            ))}
        </div>
    );
}

export default TransactionList;