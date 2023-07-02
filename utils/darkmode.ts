export const darkmode = () => {
  return `(() => {
  const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  };

  const setDarkClass = () => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  };

  const isSystemDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isLocalStorageAvailable()) {
    const localStorageTheme = localStorage.getItem('dark-mode');
    if (localStorageTheme === 'dark') {
      setDarkClass();
    } else if (localStorageTheme === 'system' || localStorageTheme === null) {
      if (isSystemDarkmode) {
        setDarkClass();
      }
    }
  } else {
    if (isSystemDarkmode) {
      setDarkClass();
    }
  }
})();`;
};
