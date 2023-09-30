export const LocalStorage = {
  get(key: any) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: any) {
    localStorage.removeItem(key);
  },
};
