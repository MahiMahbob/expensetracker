import React from "react";
import { useContextValue } from "../context/ContextProvider";

const ListContainer = () => {
  const { transictions,filterItems,deleteTransaction,editClick } = useContextValue();

  const handleEdit = (id) => {
    const item = transictions.filter((tran) => tran.id === id);
    const newItem = item[0];
    editClick(newItem);
  }
  
  return (
    <ul className="list">
      {filterItems.map((transiction) => {
        const {id, text, amount} = transiction
        const plusMinus = amount > 0 ? '+' : '-'
        return (
          <li key={id} className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{plusMinus}৳{Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => window.confirm("Are you sure you wish to delete?") && deleteTransaction(id)}><i class="fas fa-trash-alt"></i></button>
            <button className="edit-btn" onClick={() => handleEdit(id)}><i class="far fa-edit"></i></button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListContainer;
