import { createContext, useState } from "react";

const StateContext = createContext(null);

export default function StateStore({ children }) {
  const [queryMatches, setQueryMatches] = useState(false);
  return (
    <StateContext.Provider value={StateContext()}>
      {children}
    </StateContext.Provider>
  );
}
