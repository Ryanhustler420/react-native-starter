import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the context value
interface GlobalContextType {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  user: {} | null;
  setUser: (user: {} | null) => void;
  loading: boolean;
}

// Create a context with a default value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export const useGlobalContext = () => useContext(GlobalContext);

// Define a provider component
const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<{} | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch user data and set to setUser and make loading to false
    setIsLogged(true);
    setUser({});
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export { GlobalContext, GlobalProvider };