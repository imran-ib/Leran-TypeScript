import React, { createContext, useReducer } from "react";

export const initialState = {
  val: true,
  on: () => {},
  off: () => {}
};

export const GlobalContext = createContext(initialState);

type Action = {
  type: "One" | "Two" | "Three";
  payload?: string;
};

type State = {
  val: boolean;
};

const reducer = (state: State = initialState, { type, payload }: Action) => {
  switch (type) {
    case "One":
      return { val: true };
    case "Two":
      return { val: false };

    default:
      return state;
  }
};

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        val: state.val,
        on: () => dispatch({ type: "One" }),
        off: () => dispatch({ type: "Two" })
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
