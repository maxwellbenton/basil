import React from 'react'
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>
        <Link to="/">Basil</Link>
      </h1>
    <ul>

      <li>
        <Link to="/savings/">Savings</Link>
      </li>
      <li>
        <Link to="/incomes/">Incomes</Link>
      </li>
      <li>
        <Link to="/expenses/">Expenses</Link>
      </li>
      <li>
        <Link to="/debts/">Debts</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
    </ul>
  </nav>)
}
export default Header