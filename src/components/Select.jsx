import React from 'react';

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  defaultOption,
  options,
  errors,
}) {
  return (
    <div className='input-container'>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value='' hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      <p className='errors'>{errors}</p>
    </div>
  );
}
