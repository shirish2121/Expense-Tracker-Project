import React, { useEffect, useState } from 'react';

// export function useLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
//   const setValue = (newValue) => {
//     localStorage.setItem(
//       key,
//       JSON.stringify([...JSON.parse(localStorage.getItem(key)), newValue])
//     );
//   };
//   return [value, setValue];
// }

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setData(existingData);
      console.log('i am in existing data');
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, []);

  const updateLocalStorage = (newData) => {
    if (typeof newData === 'function') {
      console.log('I am in updateLocalStorage function');
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }

    setData(newData);
  };

  return [data, updateLocalStorage];
}
