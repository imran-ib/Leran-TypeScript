import React from "react";

const Header = ({
  title,
  isActive,
  defaultProp = "default",
  optionalProp,
  ArrayProp,
  MultiProps,
  ObjectProps
}: HeaderProps) => {
  return (
    <div>
      <h1>{title} </h1>
      {isActive && <h3>Active Prop</h3>}
      <p>{defaultProp}</p>
      <p>{optionalProp}</p>
      {ArrayProp.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      {MultiProps}
      {ObjectProps && (
        <>
          <p>Name : {ObjectProps.name}</p>
          <p>Age : {ObjectProps.age}</p>
        </>
      )}
    </div>
  );
};

type HeaderProps = {
  // String Prop
  title: string;
  // Boolean Prop
  isActive: boolean;
  //default Prop is set in destruturing just like in Javascript
  defaultProp: string;
  // WE USE "?" for Opational Prop
  optionalProp?: string;
  // Passing Array props
  ArrayProp: string[];
  // Multiple types
  MultiProps: string | number;
  // Object
  ObjectProps: {
    name: string;
    age: number;
  };
};

export default Header;
