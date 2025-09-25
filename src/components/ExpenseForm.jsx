import React, { useState } from 'react';

export default function ExpenseForm({ setExpenses }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errorObject = {};
    if (!formData.title) errorObject.title = 'Title is required';

    if (!formData.category) errorObject.category = 'Please Select a category';

    if (!formData.amount) errorObject.amount = 'amount is amount';

    setErrors(errorObject);
    return errorObject;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    console.log(validateResult);
    if (Object.keys(validateResult).length) return;
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({ title: '', category: '', amount: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value, id: crypto.randomUUID() }));
    setErrors({});
  };
  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          name='title'
          value={expense.title}
          onChange={handleChange}
        />
        <p className='errors'>{errors.title}</p>
      </div>
      <div className='input-container'>
        <label htmlFor='category'>Category</label>
        <select
          id='category'
          name='category'
          value={expense.category}
          onChange={handleChange}
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
        <p className='errors'>{errors.category}</p>
      </div>
      <div className='input-container'>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          name='amount'
          value={expense.amount}
          onChange={handleChange}
        />
        <p className='errors'>{errors.amount}</p>
      </div>
      <button className='add-btn'>Add</button>
    </form>
  );
}
