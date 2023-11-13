import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses';
import NewExpense from './components/NewExpense';
import { useState } from 'react';
import  AlertMassage from './Alert';
const alert = [
  {
    title:'Are You Sure?',
    msg:'These changes be reverted!',
  }
  ];
  

const initialExpenses = [
  {
    id: 'e1',
    title: 'HP Printer',
    amount: 117.23,
    date: new Date(2020, 3, 11),
  },
 
  { id: 'e2',
    title: 'Fridge',
    amount: 899.99,
    date: new Date(2022, 2, 6),
  },
  {
    id: 'e3',
    title: 'Pack of Chairs',
    amount: 313.12,
    date: new Date(2023, 12, 11),
  },
  {
    id: 'e4',
    title: 'Personal Computer (Dell)',
    amount: 1250,
    date: new Date(2021, 2, 14),
  },
  {
    id: 'e5',
    title: 'TV',
    amount: 1500,
    date: new Date(2020, 3, 20),
  },
];



function App() {
  const [expenses, setNewExpense] = useState(initialExpenses);
  const sevaNewData = (newExpenseData) =>{
    setNewExpense([newExpenseData,...expenses]);
  }
  return(
    <div>
      <NewExpense onSaveNewExpenseData={sevaNewData}></NewExpense>
      <Expenses expenses={expenses}/>
      
   
    </div>
  );
}

export default App;
 