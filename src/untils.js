export const pushDataToLocalStorage = (key, data) => {
  localStorage.setItem(key.toString(), JSON.stringify(data));
};

export const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key.toString());
  return JSON.parse(data);
};

export const getThemeFromLocalStorage = () => {
  const theme = getDataFromLocalStorage("theme");
  if (theme === null) {
    return "dark";
  }
  if (theme === "light") {
    return "dark";
  }
  if (theme === "dark") {
    return "light";
  }
};
