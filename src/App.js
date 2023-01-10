import { useState } from "react";
import "./App.css";
import Expenses from "./expenses/Expenses";
import NewExpense from "./new-expense/New-expense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Бумага",
      price: 300,
      date: new Date(),
    },
    {
      title: "Зарядник",
      price: 500,
      date: new Date(),
    },
  ]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
