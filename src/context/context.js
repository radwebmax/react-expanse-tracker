import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initalState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":123,"category":"Travel","type":"Expense","date":"2022-02-17","id":"c94335f6-ab1f-4f57-8543-4c5d6c844544"}];


export const ExpenseTrackerContext = createContext(initalState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initalState);

    //Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });


    const balance = transactions.reduce((acc, curVal) => {
        return (curVal.type === 'Expense' ? acc - curVal.amount: acc + curVal.amount)
    }, 0);
    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction:deleteTransaction,
            addTransaction:addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}