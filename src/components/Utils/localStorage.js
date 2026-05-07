const KEY = 'budget-tracker-transactions';

export function loadTransactions() {
    try {
        const saved = localStorage.getItem(KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

export function saveTransactions(transactions) {
    try {
        localStorage.setItem(KEY, JSON.stringify(transactions));
    } catch {
        console.error('Failed to save transactions')
    }
}

export default loadTransactions;