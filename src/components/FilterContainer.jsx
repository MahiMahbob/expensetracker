import React from "react";
import { useContextValue } from "../context/ContextProvider";

const FilterContainer = () => {
  const { transictions, fliterItemChange, change } = useContextValue();
  return (
    <>
      {transictions.length && (
        <div className="filter-container">
          <h3>History</h3>

          <select
            value={change}
            onChange={(e) => fliterItemChange(e.target.value)}
            className="select"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      )}
    </>
  );
};

export default FilterContainer;
