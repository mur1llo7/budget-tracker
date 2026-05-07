import { useContext } from "react";
import { BudgetContext } from '../Context/BudgetContext';
import { getTotals, getSpendingByCategory } from '../Utils/calculations';


export function useBudget() {
    const context = useContext(BudgetContext);

    if (!context) {
    throw new Error('useBudget must be used inside BudgetProvider');
}

    const { state, dispatch } = context;
    const transactions = state?.transactions ?? [];

    const totals = getTotals(transactions);
    const spendingByCategory = getSpendingByCategory(transactions);

function addTransaction(tx) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: {
            ...tx,
            id: crypto.randomUUID(),
            createdAt: Date.now(),
        },
    });
}
function editTransaction(tx) {
    dispatch({ type:'EDIT_TRANSACTION', payload: tx });
}

function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
}

    return {
        transactions,
        totals,
        spendingByCategory,
        addTransaction,
        editTransaction,
        deleteTransaction,
    };
}