import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeEvent = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => { 
    return expense.expenseDate.substr(0, 4) === filteredYear;
  });

  return (
    <div className="block min-w-[50%] p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeEvent}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
