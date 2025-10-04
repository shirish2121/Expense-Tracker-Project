import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import expenseData from './expenseData';
import React from 'react';

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });
  const [isEditing, setIsEditing] = useState(0);
  const [rowId, setRowId] = useState('');

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className='expense-tracker'>
        <ExpenseForm
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
