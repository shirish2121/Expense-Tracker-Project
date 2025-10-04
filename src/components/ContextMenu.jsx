import React from 'react';

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  expenses,
  rowId,
  setExpense,
  setIsEditing,
}) {
  if (!menuPosition.left) return;
  return (
    <div className='context-menu' style={menuPosition}>
      <div
        onClick={() => {
          console.log('Editing');
          setIsEditing(1);
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );

          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          console.log('Deleting');
          setExpenses((prev) => prev.filter((expense) => expense.id !== rowId));
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
