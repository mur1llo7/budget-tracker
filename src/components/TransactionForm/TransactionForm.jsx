import { useState } from "react";
import { useBudget } from '../Hooks/useBudget';
import { CATEGORY_NAMES } from '../Utils/categories';
import Button from '../UI/Button/Button';
import styles from './TransactionForm.module.css';

const EMPTY_FORM = {
    type: 'expense',
    amount: '',
    category: 'Food & Dining',
    date: new Date().toISOString().split('T')[0],
    note:'',
};

function TransactionForm({ existing, onDone }) {
    const { addTransaction, editTransaction, deleteTransaction } = useBudget();
    const [form, setForm] = useState(existing ?? EMPTY_FORM);
    const isEditing = Boolean(existing);

    function handleChange(field, value) {
        setForm(prev => ({ ...prev, [field]: value }));
    }

    function handleSubmit() {
        if (!form.amount || isNaN(Number(form.amount))) return;
        const tx = { ...form, amount: Number(form.amount) };

        if (isEditing) {
            editTransaction(tx);
        } else {
            addTransaction(tx);
        }
        onDone();
    }

    function handleDelete() {
        deleteTransaction(existing.id);
        onDone();
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {isEditing ? 'Edit Transaction' : 'Add Transaction'}
            </h2>

        {/* Income / Expense Toggle */}
        <div className={styles.toggle}>
            <button
                type="button"
                className={`${styles.toggleBtn} ${form.type === 'income' ? styles.toggleActive : ''}`}
                onClick={() => handleChange('type', 'income')}
            >
            Income
            </button>
            <button className={`${styles.toggleBtn} ${form.type === 'expense' ? styles.toggleActive : ''}`}
            onClick={() => handleChange('type', 'expense')}>
                Expense
            </button>
        </div>

        {/* Amount */}
        <div className={styles.field}>
            <label className={styles.label}>Amount</label>
            <input 
            className={styles.input}
            type="number"
            min="0"
            placeholder="0.00"
            value={form.amount}
            onChange={e => handleChange('amount', e.target.value)}
            />
        </div>

        {/* Category */}
        <div className={styles.field}>
        <label className={styles.label}>Category</label>
        <select 
            className={styles.input}
            value={form.category}
            onChange={e => handleChange('category', e.target.value)}
        >
            {CATEGORY_NAMES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
        </div>

        {/* Date */}
        <div className={styles.field}>
            <label className={styles.label}>Date</label>
            <input  
                className={styles.input}
                type="date"
                value={form.date}
                onChange={e => handleChange('date', e.target.value)}
            />
        </div>

        {/* Note */}
        <div className={styles.field}>
            <label className={styles.label}>Note</label>
            <input 
            className={styles.input}
            type="text"
            placeholder="Optional note..."
            value={form.note}
            onChange={e => handleChange('note', e.target.value)}
            />
        </div>

        <Button variant="accent" fullWidth onClick={handleSubmit}>
            {isEditing ? 'Save' : 'Add Transaction'}
        </Button>

        {isEditing && (
            <Button variant="danger" fullWidth onClick={handleDelete}>
                Delete Transactions
            </Button>
        )}
        </div>
    );
}

export default TransactionForm