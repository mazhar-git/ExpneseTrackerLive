import ExpensesItem from "./ExpensesItem";

const ExpensesList = (props) => {

  if(props.expenses.length === 0){
    return <h2 className="text-center p-5">No Expenses Found this year!</h2>
  }

  return (
    <ul>
      {props.expenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.expenseDate}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
