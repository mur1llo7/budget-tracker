import { useContext } from "react";
import { BudgetContext } from '../Context/BudgetContext';
import { getTotals, getSpendingByCategory } from '../Utils/calculations';

export function useBudget() {
    const { state, dispatch } = useContext(BudgetContext);
    const { transactions } = state;

    const totals = getTotals(transactions);
    const SpendingByCategory = getSpendingByCategory(transactions);

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
        SpendingByCategory,
        addTransaction,
        editTransaction,
        deleteTransaction,
    };
}