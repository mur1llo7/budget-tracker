import TransactionItem from './TransactionItem';
import { formatDate } from '../Utils/calculations';
import styles from './Transactions.module.css';

function TransactionGroup({ date, transactions, onItemClick }) {
    return (
        <div className={styles.group}>
            <p className={styles.dataLabel}>{formatDate(date)}</p>
            <div className={styles.groupcard}>
                {transactions.map(tx => (
                    <TransactionItem
                        key={tx.id}
                        transaction={tx}
                        onClick={onItemClick}
                        />
                ))}
            </div>
        </div>
    );
}

export default TransactionGroup