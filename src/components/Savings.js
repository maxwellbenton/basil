import React, {
  useState
} from 'react';

function Savings({
  addSavings
}) {

  const [savingsInfo, setSavingInfo] = useState({
    name: '',
    amount: 0,
    interest: 0
  });

  function handleChange(event) {
    setSavingInfo({ ...savingsInfo,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    debugger
    addSavings(savingsInfo);
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
      Interest:
      <input onChange={handleChange} type="text" name="interest" />
    </label>
    <input type="submit" value="Submit" />
  </form>

  )
}

export default Savings