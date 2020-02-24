import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button } from "./components/Button";
import { Events } from "./components/Events";
import ChildrenComponent from "./components/Children";
import { MyInput } from "./components/Hooks/useState";
import ReducerComponent from "./components/Hooks/useReducer";
import { GlobalProvider } from "./components/GlobalState";

const ArrayPropContainer = [
  "Array Item One",
  "Array Item  Tow",
  "Array Item  Three"
];
const ObjectPropsContainer = {
  name: "Imran",
  age: 30
};

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Basic Types */}
          <Header
            title="Main Header"
            isActive={true}
            defaultProp="Default Props"
            optionalProp="Optional Props"
            ArrayProp={ArrayPropContainer}
            MultiProps="string Or Number"
            ObjectProps={ObjectPropsContainer}
          />
          {/* Functions Type */}
          <Button onClick={value => console.log(value)} />
          {/* Events as Props */}
          <Events
            onClick={e => {
              e.preventDefault();
              console.log(e);
            }}
          />
          {/* Passing Children Prop */}
          <ChildrenComponent>
            <button onClick={() => console.log("Hey I Am Child Component")}>
              Child Button
            </button>
          </ChildrenComponent>

          {/* USE State Hook */}
          <MyInput />
          {/* Use Reducer */}
          <ReducerComponent />
        </header>
      </div>
    </GlobalProvider>
  );
}

export default App;
