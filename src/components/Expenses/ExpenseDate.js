
const ExpenseDate = (props) => {

    const month = new Date(props.date).toLocaleString('en-US', {month: 'long'});
    const day = new Date(props.date).toLocaleString('en-US', {day: '2-digit'});
    const year = new Date(props.date).getFullYear();

    return(
        <div className="block max-w-sm p-2 bg-pink-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="text-center font-bold">{month}</div>
            <div className="text-center text-sm">{year}</div>
            <div className="text-center font-bold">{day}</div>
        </div>
    )
}

export default ExpenseDate;