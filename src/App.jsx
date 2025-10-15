import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './expenseData';
import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', expenseData);
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });
  const [isEditing, setIsEditing] = useLocalStorage('isEditing', 0);
  const [rowId, setRowId] = useLocalStorage('rowId', '');

  // const [localStorageData, setLocalStorageData] = useLocalStorage(
  //   'records',
  //   [1, 2, 3, 4]
  // );

  // console.log('localStorageData', localStorageData);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className='expense-tracker'>
        <ExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          isEditing={isEditing}
          rowId={rowId}
          setIsEditing={setIsEditing}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setIsEditing={setIsEditing}
          rowId={rowId}
          setRowId={setRowId}
        />
      </div>
    </main>
  );
}

export default App;
