import React from "react";

// React.Fc<Props> is Special Function we use here

const ChildrenComponent: React.FC = ({ children }) => {
  return <>{children}</>;
};

export default ChildrenComponent;
