// Reduce the array in three numbers
export function getTotals(transactions) {
    return transactions.reduce(
        (acc, tx) => {
            if (tx.type === "income") {
                acc.income += tx.amount;
            } else {
                acc.expenses += tx.amount;
            }
            acc.balance = acc.income - acc.expenses;
            return acc;
        },
        { income: 0, expenses: 0, balance: 0 }
    );
}

// Sorts and groups by date string
export function groupByDate(transactions) {
    const groups = {};

    [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(tx => {
            const date = tx.date;
            if (!groups[date]) groups[date] = [];
            groups[date].push(tx);
        });
    
    return groups;
}

// Filter expenses only and maps them to the shape Recharts
export function getSpendingByCategory(transactions) {
    const expenses = transactions.filter(tx => tx.type === 'expense');

    const grouped = expenses.reduce((acc, tx) => {
        acc[tx.category] = (acc[tx.category] ?? 0) + tx.amount;
        return acc;
    }, {});

    return Object.entries(grouped).map(([name, value]) => ({
        name,
        value,
    }));
}

// Built-in Intl API to format money
export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }). format(amount);
}

// Converts a date string into a full date
export function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() -1);

    if(date.toDateString() === today.toDateString()) return 'Today';
    if(date.toDateString() === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}