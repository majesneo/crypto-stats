export const getItem = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeItem = (key: string) => {
  return window.localStorage.removeItem(key);
};

export const setItem = <T>(key: string, item: T) => {
  window.localStorage.setItem(key, JSON.stringify(item));
};
