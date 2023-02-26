import React, {
  useMemo,
  useContext,
  createContext,
  useState,
  useCallback,
} from 'react';

interface GlobalContextProps {
  unmountLoader: boolean;
  handleUnmountLoader: () => void;
}

const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [unmountLoader, setUnmountLoader] = useState(false);

  const handleUnmountLoader = useCallback(() => {
    setUnmountLoader(true);
  }, []);

  const values = useMemo(
    () => ({
      unmountLoader,
      handleUnmountLoader,
    }),
    [unmountLoader, handleUnmountLoader]
  );

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const data = useContext(GlobalContext);
  return { ...data };
};

export { GlobalContextProvider, useGlobal };
