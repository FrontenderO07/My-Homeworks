import ExpenseItem from "../expense-item/ExpenseItem";

const Expenses = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            price={elem.price}
            title={elem.title}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
