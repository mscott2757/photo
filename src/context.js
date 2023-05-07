import { useMemo, useState, createContext } from 'react';

const defaultState = {
  showNav: true,
  showNavFull: true,
  showAbout: false,
  scrollPosition: 0,
  activeDropdown: '',
};

const AppContext = createContext({
  setState: s => null,
  state: defaultState,
});

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  const value = useMemo(() => ({
    setState: nextState => {
      setState(s => ({ ...s, nextState }));
    },
    state,
  }), [ state]);

  return (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
);
};
