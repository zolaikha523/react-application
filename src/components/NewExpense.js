import React from "react";
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";
import { useState } from "react";



const NewExpense = (props) =>{
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () =>{
        setCollapse(!collapse);
    }
   
    const saveExpenseData =(data) => {
       const newExpense ={
        ...data, id: Math.random().toString()
       }
       props.onSaveNewExpenseData(newExpense);
    };
    return (
        <div className='new-expense'>
            {!collapse && <button onClick={handleCollapse}>Add New Expense</button>}
            {collapse &&  <ExpenseForm onSaveExpenseData={saveExpenseData} handleCollapse={handleCollapse}/>}
        </div>
       
    )
}
export default NewExpense ;