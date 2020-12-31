import React from "react";
import { useContextValue } from "../context/ContextProvider";

const Header = () => {
  const {transictions} = useContextValue()
  const amount = transictions.map(transiction => transiction.amount)
  const income = amount.reduce((total,current) => total += current,0)
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">৳{income}</h1>
    </>
  );
};

export default Header;
