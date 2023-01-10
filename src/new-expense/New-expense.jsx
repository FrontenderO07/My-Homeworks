import Button from "../ui/button/Button";
import ExpenseForm from "../expense-form/ExpenseForm";
import { useState } from "react";
import "./newExpense.css"

const NewExpense = ({onNewExpenseAdd}) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((prevState)=>{
      return !prevState;
    })
  };
  return (
    <div className="expenseNew">
      {showForm ? (
        <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={onNewExpenseAdd} />
      ) : (
        <Button onClick={showExpenseForm} >Добавить новый расход ✔</Button>
      )}
    </div>
  );
};
export default NewExpense;
