
import logo from './logo.svg';
import './App.css';



import React,{useState} from 'react'
import Home from './components/home'
import Login from './components/login';
import SignUp from './components/signup';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 

function App() {

  const [transaction, setTransaction] = useState ([]);

  const addTransaction = ((amount, item, transactionType)=>{

    setTransaction((item)=>[...item,{

      amount:amount,
      item:item,
      transactionType:transactionType

    }])
  })
  return (

    <Router>

      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home">
        < Home list={transaction}  add={addTransaction} />
        </Route>
        
      </Switch>
    
    </Router>
    
    
  );
}
export default App;