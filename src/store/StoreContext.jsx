import { createContext } from "react";

const StateContext = createContext(null);

export default function StateStore({ children }) {
  return (
    <StateContext.Provider value={StateContext()}>
      {children}
    </StateContext.Provider>
  );
}
