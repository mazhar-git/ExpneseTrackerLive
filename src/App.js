import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  /* const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]; */

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://ec2-13-232-164-23.ap-south-1.compute.amazonaws.com/expenseapi/expenses/")
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }, []);

  const addExpenseHandler = (expense) => {
    
    fetch("http://ec2-13-232-164-23.ap-south-1.compute.amazonaws.com/expenseapi/expenses/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((result) => result.json())
      .then((result) => {
        setExpenses((expenses) => { return [result, ...expenses];});
      });
  };
  return (
    <div className="grid place-items-center">
      <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary">
        Expense Tracker!
      </h2>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
