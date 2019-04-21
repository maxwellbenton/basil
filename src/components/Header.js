import React from 'react'
import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <nav>
      <div id="logo">
        <Link to="/">BASIL</Link>
      </div>
      <ul>
      <li>
        <Link to="/savings/">SAVINGS</Link>
      </li>
      <li>
        <Link to="/incomes/">INCOMES</Link>
      </li>
      <li>
        <Link to="/expenses/">EXPENSES</Link>
      </li>
      <li>
        <Link to="/debts/">DEBTS</Link>
      </li>
      <li>
        <Link to="/about/">ABOUT</Link>
      </li>
    </ul>
  </nav>)
}
export default Header