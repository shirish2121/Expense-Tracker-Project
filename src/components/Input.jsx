import React from 'react';

export default function Input({
  className,
  label,
  id,
  name,
  value,
  onChange,
  errors,
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className='errors'>{errors}</p>
    </div>
  );
}
