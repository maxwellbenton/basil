import React, {
  useState
} from 'react';

function Expenses({
  addExpense
}) {

  const [expenseInfo, setExpenseInfo] = useState({
    name: '',
    amount: 0,
    interval: 'bi-weekly'
  });

  function handleChange(event) {
    setExpenseInfo({ ...expenseInfo,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    debugger
    addExpense(expenseInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input onChange={handleChange} type="text" name="name" />
    </label>
    <label>
      Amount:
      <input onChange={handleChange} type="text" name="amount" />
    </label>
    <label>
      Interval:
      <select onChange={handleChange} name="interval">
        <option value="weekly">Weekly</option>
        <option value="bi-weekly">Bi-Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </label>
    <input type="submit" value="Submit" />
  </form>

  )
}

export default Expenses