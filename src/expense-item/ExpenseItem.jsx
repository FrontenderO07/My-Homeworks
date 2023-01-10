import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="listHead">
      <p>{props.price}</p>
      <p>{props.title}</p>
      <p>{props.date.toString()}</p>
    </div>
  );
};

export default ExpenseItem;
