import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthContextPtovider({ children }) {

  function test() {
    //console.log("Aqui")
  }

  return (
    <AuthContext.Provider value={{ test }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext);
}