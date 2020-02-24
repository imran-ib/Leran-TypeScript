import React from "react";

type EventProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Specific
  onClick2?: (e: React.MouseEvent) => void; // Basic
  // OTHERS
  onChnage?: (e: React.FormEvent) => void; // Basic
  onChnage2?: (e: React.FormEvent<HTMLInputElement>) => void; // Specific
};

export const Events = ({ onClick }: EventProps) => {
  return <button onClick={onClick}>Cick Event</button>;
};
