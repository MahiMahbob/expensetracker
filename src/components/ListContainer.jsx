import React from "react";
import { useContextValue } from "../context/ContextProvider";

const ListContainer = () => {
  const { handleEdit,filterItems,deleteTransaction } = useContextValue();

  return (
    <ul className="list">
      {filterItems.map((transiction) => {
        const {id, text, amount} = transiction
        const plusMinus = amount > 0 ? '+' : '-'
        return (
          <li key={id} className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{plusMinus}৳{Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => window.confirm("Are you sure you wish to delete?") && deleteTransaction(id)}><i className="fas fa-trash-alt"></i></button>
            <button className="edit-btn" onClick={() => handleEdit(id)}><i className="far fa-edit"></i></button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListContainer;
