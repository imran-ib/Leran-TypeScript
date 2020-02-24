import React, { useState, useRef } from "react";

export const MyInput = () => {
  const [name, setname] = useState("");
  // We want To set type implicitly
  const [name2, setname2] = useState<string | number>("");

  // Simple Useages
  /*
  const Ref = useRef(null);
  console.log("TCL: MyInput -> Ref", Ref.current);
  
  */

  // Complex
  const Ref = useRef<HTMLInputElement>(null);
  // With optional prams
  console.log("TCL: MyInput -> Ref", Ref.current?.value);
  // OR
  if (Ref && Ref.current) {
    console.log("TCL: MyInput -> Ref", Ref.current.value);
  }

  return (
    <div>
      <input
        ref={Ref}
        type="text"
        name="name"
        value={name}
        onChange={e => setname(e.target.value)}
      />
    </div>
  );
};
