import CategoryIcon from '../UI/CategoryIcon/CategoryIcon';
import { formatCurrency } from '../../components/Utils/calculations';
import styles from './Transactions.module.css';

function TransactionItem({ transaction, onClick }) {
    // eslint-disable-next-line no-unused-vars
    const { type, amount, category, note, date } = transaction;
    const isIncome = type === 'income';


return (
    <div className={styles.item} onClick={() => onClick(transaction)}>
        <CategoryIcon category={category} size='sm' />
    <div className={styles.itemInfo}>
        <p className={styles.itemName}>{note || category}</p>
        <p className={styles.itemCategory}>{category}</p>
    </div>
    <p className={`${styles.itemAmount} ${isIncome ? styles.income : styles.expense}`}>
        {isIncome ? '+' : '-'}{formatCurrency(amount)}
    </p>
    </div>
    );
}

export default TransactionItem