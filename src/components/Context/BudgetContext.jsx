import { createContext, useReducer, useEffect } from "react";
import { loadTransaction, saveTransaction } from '../Utils/localStorage'

export const BudgetContext = createContext(null);

const initialState = {
    transatcions: [],
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