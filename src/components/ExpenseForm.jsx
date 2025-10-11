import React, { useEffect, useState } from 'react';
import Input from './Input';
import Select from './Select';
export default function ExpenseForm({
  expenses,
  setExpenses,
  expense,
  setExpense,
  isEditing,
  rowId,
  setIsEditing,
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // const [expense, setExpense] = useState({
  //   title: '',
  //   category: '',
  //   amount: '',
  // });

  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem('records'))) {
  //     setExpenses(JSON.parse(localStorage.getItem('records')));
  //   }
  // }, []);

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter the title' },
      { minLength: 3, message: 'Title should be atleast 5 characters long' },
    ],
    category: [{ required: true, message: 'Please enter a category' }],
    amount: [{ required: true, message: 'Please enter an amount' }],
  };

  const validate = (formData) => {
    const errorsData = {};

    // console.log(Object.entries(formData));
    // console.log(Object.entries(formData));

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    // console.log(validateResult);
    if (Object.keys(validateResult).length) return;
    // setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    // console.log(isEditing);
    !isEditing
      ? setExpenses((prev) => {
          return [...prev, { ...expense, id: crypto.randomUUID() }];
        })
      : setExpenses((prev) => {
          setIsEditing(0);
          return prev.map((prevExpense) => {
            if (prevExpense.id === rowId) {
              return { ...expense, id: rowId };
            } else {
              return prevExpense;
            }
          });
        });
    setExpense({ title: '', category: '', amount: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };
  return (
    <form className='expense-form' onSubmit={handleSubmit}>
      <Input
        label='Title'
        id='title'
        name='title'
        value={expense.title}
        onChange={handleChange}
        errors={errors.title}
      />

      <Select
        label='Category'
        id='category'
        name='category'
        value={expense.category}
        onChange={handleChange}
        defaultOption='Select Category'
        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
        errors={errors.category}
      />

      <Input
        label='Amount'
        id='amount'
        name='amount'
        value={expense.amount.replace(/[^\d.]+/g, '')}
        onChange={handleChange}
        errors={errors.amount}
      />

      <button className='add-btn'>{isEditing ? 'Save' : 'Add'}</button>
    </form>
  );
}
