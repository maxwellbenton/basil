import React, {
  useState,
  useEffect
} from 'react';
import logo from './logo.svg';
import {
  set,
  get,
  keys
} from 'idb-keyval';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Overview from './components/Overview'
import About from './components/About'
import Incomes from './components/Incomes'
import Expenses from './components/Expenses'
import Investments from './components/Investments'
import Debts from './components/Debts'



function App() {

  const [incomes, setIncomes] = useState({});
  const [expenses, setExpenses] = useState({});
  const [investments, setInvestments] = useState({});
  const [debts, setDebts] = useState({});

  useEffect(() => {
    keys()
      .then(keys => {
        if (keys.includes('incomes') && keys.includes('expenses') && keys.includes('investments') && keys.includes('debts')) {
          get('incomes')
            .then(val => setIncomes(val))
          get('expenses')
            .then(val => setExpenses(val))
          get('investments')
            .then(val => setInvestments(val))
          get('debts')
            .then(val => setDebts(val))
        } else {
          set('incomes', {})
          set('expenses', {})
          set('investments', {})
          set('debts', {})
        }
      })

  })

  function addIncome(newIncome) {
    let newIncomes = { ...incomes,
      ...newIncome
    }
    setIncomes(newIncomes)
    set('incomes', newIncomes)
  }

  function addExpense(newExpense) {
    let newExpenses = { ...expenses,
      ...newExpense
    }
    setExpenses(newExpenses)
    set('expenses', newExpenses)
  }

  function addInvestment(newInvestment) {
    let newInvestments = { ...investments,
      ...newInvestment
    }
    setInvestments(newInvestments)
    set('investments', newInvestments)
  }

  function addDebt(newDebt) {
    let newDebts = { ...debts,
      ...newDebt
    }
    setDebts(newDebts)
    set('debts', newDebts)
  }


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/incomes/">Incomes</Link>
            </li>
            <li>
              <Link to="/expenses/">Expenses</Link>
            </li>
            <li>
              <Link to="/investments/">Investments</Link>
            </li>
            <li>
              <Link to="/debts/">Debts</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Overview} />
        <Route path="/incomes/" component={Incomes} />
        <Route path="/expenses/" component={Expenses} />
        <Route path="/investments/" component={Investments} />
        <Route path="/debts/" component={Debts} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );

}

export default App;