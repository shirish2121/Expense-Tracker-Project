import React, { useEffect, useRef, useState } from 'react';

export default function ExpenseForm({ setExpenses }) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   console.log(getFormData(e.target));
  //   const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
  //   setExpenses((prevState) => [...prevState, expense]);
  //   e.target.reset();
  // };

  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   console.log(formData);
  //   console.log(formData.entries());
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState({
    id: crypto.randomUUID(),
    title: '',
    category: '',
    amount: '',
  });

  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    // console.log(expense);
    setExpenses((prev) => [
      ...prev,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID(),
      },
    ]);
    // setExpense({ title: '', category: '', amount: '' });
    // e.target.reset();
    // setTitle('');
    // setCategory('');
    // setAmount('');
    // ====================================================================
  };
  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          // value={expense.title}
          // onChange={(e) =>
          //   setExpense((pre) => ({ ...pre, title: e.target.value }))
          // }
          ref={titleRef}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='category'>Category</label>
        <select
          id='category'
          name='category'
          // value={expense.category}
          // onChange={(e) =>
          //   setExpense((pre) => ({ ...pre, category: e.target.value }))
          // }
          ref={categoryRef}
        >
          <option value='' hidden>
            Select Category
          </option>
          <option value='Grocery'>Grocery</option>
          <option value='Clothes'>Clothes</option>
          <option value='Bills'>Bills</option>
          <option value='Education'>Education</option>
          <option value='Medicine'>Medicine</option>
        </select>
      </div>
      <div className='input-container'>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          name='amount'
          // value={expense.amount}
          // onChange={(e) =>
          //   setExpense((pre) => ({ ...pre, amount: e.target.value }))
          // }
          ref={amountRef}
        />
      </div>
      <button className='add-btn'>Add</button>
    </form>
  );
}
