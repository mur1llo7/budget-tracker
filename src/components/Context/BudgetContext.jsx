/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useEffect } from "react";
import { loadTransactions, saveTransactions } from '../Utils/localStorage'

export const BudgetContext = createContext(null);

const initialState = {
    transactions: [],
};

function budgetReducer(state, action) {
    switch (action.type) {
        case 'LOAD_TRANSACTIONS':
            return { ...state, transactions: action.payload };

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            };
        case 'EDIT_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(tx =>
                    tx.id === action.payload.id 
                    ? { ...tx, ...action.payload }
                    : tx
                ),
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(tx => 
                    tx.id !== action.payload
                ),
            };

        default:
            return state;    
    }
}

export function BudgetProvider({ children }) {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    // Load from localStorage on first render
    useEffect(() => {
        const saved = loadTransactions();
        if (saved.length > 0) {
            dispatch({ type: 'LOAD_TRANSACTIONS', payload: saved });
        }
    }, []);

    // Save to localStorage whenever transaction change
    useEffect(() => {
        saveTransactions(state.transactions);
    }, [state.transactions]);

    return (
        <BudgetContext.Provider value={{ state, dispatch }}>
            {children}
        </BudgetContext.Provider>
    );
}