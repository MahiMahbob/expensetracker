import React from "react";
import './App.css'
import FilterContainer from "./components/FilterContainer";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import IncomeContainer from "./components/IncomeContainer";
import ListContainer from "./components/ListContainer";

function App() {

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className='container'>
        <Header />
        <IncomeContainer />
        <FilterContainer />
        <ListContainer />
        <h3>Add new transaction</h3>
        <FormContainer />
      </div>
    </>
  )
}

export default App;
