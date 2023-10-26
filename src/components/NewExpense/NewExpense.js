import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
};

export default NewExpense;
