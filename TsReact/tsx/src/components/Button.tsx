import React from "react";

type ButtonProps = {
  //?   onClick(): string;  // function that returns a string
  //   onClick(): void;  // returns Nothing
  //   onClick(value: string): void; // Arguments
  // ? All Above Are Methods
  onClick: (value: string) => void;
};

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={value => onClick("Some Value")}>Click Me</button>;
};
