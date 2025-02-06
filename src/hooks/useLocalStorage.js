import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValues) {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValues
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);

  // Avoid unecessary destructuring
  return [values, setValues];
}
