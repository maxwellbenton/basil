import React, {
  useState,
  useEffect
} from 'react';

import {
  set,
  get,
  keys
} from 'idb-keyval';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Overview from './components/Overview'
import About from './components/About'
import Savings from './components/Savings'
import Incomes from './components/Incomes'
import Expenses from './components/Expenses'
import Debts from './components/Debts'
// import Investments from './components/Investments'

const defaultData = {
  savings: [],
  incomes: [],
  expenses: [],
  debts: []
}

function App() {

  const [data, setData] = useState(defaultData)

  useEffect(() => {

    get('data')
      .then(val => {
        if (!val) {
          set('data', defaultData)
            .then(val => {
              console.log('Savings object created in IDB');
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          if (JSON.stringify(val) !== JSON.stringify(data)) {
            console.log('setting initial data state from IDB', val)
            setData(val)
          }
        }
      })
      .catch((error) => {
        console.log(error);
        set('data', defaultData)
          .then(val => {
            console.log('Savings object created in IDB');
          })
          .catch(error => {

            console.log(error)
          })
      })
  })

  function addSavings(newSavingsAccount) {
    let newData = { ...data,
      savings: [
        ...data.savings, newSavingsAccount
      ]
    }
    set('data', newData)
      .then(() => {
        console.log('data updated')
      })
      .catch(error => {
        console.log(error)
      })
    setData(newData)
  }

  function addIncome(newIncome) {
    let newData = { ...data,
      incomes: [
        ...data.incomes, newIncome
      ]
    }
    set('data', newData)
      .then(() => {
        console.log('data updated')
      })
      .catch(error => {
        console.log(error)
      })
    setData(newData)
  }

  function addExpense(newExpense) {
    let newData = { ...data,
      expenses: [
        ...data.expenses, newExpense
      ]
    }
    set('data', newData)
      .then(() => {
        console.log('data updated')
      })
      .catch(error => {
        console.log(error)
      })
    setData(newData)
  }

  function addDebt(newDebt) {
    let newData = { ...data,
      debts: [
        ...data.debts, newDebt
      ]
    }
    set('data', newData)
      .then(() => {
        console.log('data updated')
      })
      .catch(error => {
        console.log(error)
      })
    setData(newData)
  }




  return (
    <Router>
      <Header />
      <div>

        <Route path="/" exact render={props => <Overview {...props} savings={data.savings} incomes={data.incomes} expenses={data.expenses} debts={data.debts} />} />
        <Route path="/savings/" render={props => <Savings {...props} addSavings={addSavings} />} />
        <Route path="/incomes/" render={props => <Incomes {...props} addIncome={addIncome} />} />
        <Route path="/expenses/" render={props => <Expenses {...props} addExpense={addExpense} />} />
        <Route path="/debts/" render={props => <Debts {...props} addDebt={addDebt} />} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );

}

export default App;