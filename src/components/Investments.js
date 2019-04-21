import React, {
  useState
} from 'react';

function Investmentss({
  addInvestments
}) {

  const [investmentInfo, setInvestmentsInfo] = useState({
    type: '401k',
    amount: 0,
    interval: 'bi-weekly',
  });

  function handleChange(event) {
    setInvestmentsInfo({ ...investmentInfo,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addInvestments(investmentInfo);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input onChange={handleChange} type="text" name="name" />
    </label>
    <label>
      Amount:
      <input onChange={handleChange} type="text" name="investment" />
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

export default Investmentss