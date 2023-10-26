import ExpenseDate from "./ExpenseDate";
//import classNames from "classnames";

const ExpensesItem = (props) => {
  let bgClass = '';
  
  if(props.amount < 100){
   bgClass = 'bg-red-200'
  }else if(props.amount > 100 && props.amount < 500){
   bgClass = 'bg-red-400'
  }else{
    bgClass= 'bg-red-600'
  }

  return (
    <div className={`inline-grid grid-cols-3 gap-4 p-6 m-3 ${bgClass} border border-gray-200 rounded-lg shadow hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
      <ExpenseDate date={props.date} />
      <span className="inline-block align-middle text-white text-base">{props.title}</span>
      <span className="font-bold text-white text-2xl">${props.amount}</span>
    </div>
  );
};

export default ExpensesItem;
