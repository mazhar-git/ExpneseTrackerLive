const ExpenseFilter = (props) => {
  const onSelectChange = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="block max-w-xs mx-auto place-items-right">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Filter by year
      </label>
      <select
        value={props.selected}
        onChange={onSelectChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
