/** @format */

export const saveToLocalStorage = (keys, data) => {
  for (const key in keys) {
    if (data[key]) {
      localStorage.setItem(keys[key], JSON.stringify(data[key]));
    }
  }
};

export const loadFromLocalStorage = (key, defaultValue) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultValue;
};
