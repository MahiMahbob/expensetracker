import React from "react";
import { useContextValue } from "../context/ContextProvider";

const FormContainer = () => {
  const {
    editListing,
    addTransaction,
    currentTrans,
    text,
    isEdit,
    amount,
    changeInput,
  } = useContextValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const newTran = {
        text,
        amount: +amount,
        id: currentTrans.id
      };
      editListing(newTran);
    } else {
      if(text === '' & amount === '') {
        alert('Please add transaction value')
      }else {
        const newTran = {
          id: Math.floor(Math.random() * 700000),
          text,
          amount: +amount,
        }
        addTransaction(newTran);
      }
      
    }
  };

  const handleInputChange = (e) => {
    changeInput(e.target.value, e.target.name);
  };
  const btn = isEdit ? 'save' : 'Add Transactions'
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Transaction title</label>
        <input
          type="text"
          value={text}
          name="text"
          id="text"
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          value={amount}
          name="amount"
          onChange={handleInputChange}
          id="amount"
          placeholder="Enter amount..."
        />
      </div>
      <button className="btn">{btn}</button>
    </form>
  );
};

export default FormContainer;
