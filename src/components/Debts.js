import React, {
  useState
} from 'react';

function Debts({
  addDebt
}) {

  const [debtInfo, setDebtInfo] = useState({
    name: '',
    totalDebt: 0,
    APR: 0
  });

  function handleChange(event) {
    setDebtInfo({ ...debtInfo,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    debugger
    addDebt(debtInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input onChange={handleChange} type="text" name="name" />
    </label>
    <label>
      Total:
      <input onChange={handleChange} type="text" name="totalDebt" />
    </label>
    <label>
      APR:
      <input onChange={handleChange} type="text" name="APR" />
    </label>
    <input type="submit" value="Submit" />
  </form>

  )
}

export default Debts