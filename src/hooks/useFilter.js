import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocalStorage('query', '');
  console.log(dataList);
  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
}
