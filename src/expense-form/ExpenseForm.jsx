import FormInput from "../ui/forminput/FormInput";
import Button from "../ui/button/Button";
import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [date, setDate] = useState(null);

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInputChangeHandler = (event) => {
    console.log(event.key);
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };
  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      date,
      price,
    };

    props.onNewExpenseAdd(expenseData);
    // console.log(expenseData);
  };

  return (
    <form className="expenseForm">
      <div className="formInputTextAndNumber">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="..."
          value={title}
          onChange={titleInputChangeHandler}
        />
        <FormInput
          id="price"
          labelName="Количество денег (сом)"
          inputType="number"
          value={price}
          oneChange={priceInputChangeHandler}
          // onKeyPress=(event)=>{

          // }
        />
      </div>
      <div className="dataInput">
        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </div>

      <div className="buttonExpenseForm">
        <Button onClick={cancelHandler}>Отмена</Button>
        <Button onClick={saveHandler}>Сохранить</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
