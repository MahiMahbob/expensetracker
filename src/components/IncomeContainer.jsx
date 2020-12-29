import React from "react";
import { useContextValue } from "../context/ContextProvider";

const IncomeContainer = () => {

  const {transictions} = useContextValue()

  const amount = transictions.map(transiction => transiction.amount)
  const income = amount.filter(plusAmount => plusAmount > 0).reduce((total,current) => total +=current ,0).toFixed(2)
  const expense = (amount.filter(plusAmount => plusAmount < 0).reduce((total,current) => total +=current ,0) * -1).toFixed(2)
  
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+৳{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-৳{expense}</p>
      </div>
    </div>
  );
};

export default IncomeContainer;
