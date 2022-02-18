import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initalState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":2509,"category":"Deposits","type":"Income","date":"2005-01-01","id":"9f793f90-bf1d-4aa2-b219-14c5fcca2405"},{"amount":2000,"category":"Food","type":"Expense","date":"2022-02-20","id":"819ed5b1-dcb9-44fc-ab35-6c4157f10af5"},{"amount":2000,"category":"Car","type":"Expense","date":"2022-02-24","id":"aeec6aed-b643-425e-9446-7aec281dd0ce"},{"amount":1000,"category":"Business","type":"Income","date":"2022-02-21","id":"3ba345d1-917c-45eb-95a4-9909689ed030"},{"amount":2300,"category":"Pets","type":"Expense","date":"2022-02-18","id":"c837213d-6809-4ad8-93ef-c3ec4af108c0"},{"amount":3000,"category":"House","type":"Expense","date":"2022-02-18","id":"4cd5a71b-0590-4269-adcf-d251d4ea259d"},{"amount":200,"category":"Food","type":"Expense","date":"2022-02-20","id":"e4cd1a0c-a577-4deb-a97b-7f7fb8627f0c"},{"amount":500,"category":"Car","type":"Expense","date":"2022-02-18","id":"6e915fd8-cbbc-4fc6-967d-ea70fafaeb6e"},{"amount":3000,"category":"Lottery","type":"Income","date":"2022-02-18","id":"a8c4eb37-64f0-4176-96cc-1fc2db7d8b30"},{"amount":2000,"category":"Investments","type":"Income","date":"2022-02-18","id":"74eb5ed7-c68b-49f5-8359-5a168c1a14cb"},{"amount":3000,"category":"Salary","type":"Income","date":"2022-02-18","id":"d68bc7d2-6411-4bb1-9223-1efac6f45454"},{"amount":200,"category":"House","type":"Expense","date":"2022-02-18","id":"a132c9ba-2e53-48a8-88c3-498a1ffe0b3b"},{"amount":123,"category":"Travel","type":"Expense","date":"2022-02-17","id":"c94335f6-ab1f-4f57-8543-4c5d6c844544"}];


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