
import './ExpenseForm.css';

import React, {useState} from 'react';
const ExpenseForm = (props) =>{
    
    
  const [interedTitle, setTitle]= useState("");
  const [interedAmount, setAmount]= useState("");
  const [interedDate, setDate]= useState("");
  
 
    const handleInputChange = (identefire, value)=>{
        if (identefire === 'title'){
            setTitle(value) 
        
        }
        else if (identefire ==='amount'){
            setAmount(value) 
        }
        else if (identefire ==='date'){
            setDate(value) 
        }
        
    }
    const handleSubmitData = (e)=>{
        e.preventDefault();

        const expenseData = {
            title:interedTitle,
            amount:interedAmount,
            date: new Date(interedDate)

        }
       props.onSaveExpenseData(expenseData);

        setTitle("");
        setAmount("");
        setDate("");
    }

    return(
        <form onSubmit={handleSubmitData}>
            <div className="new-expense__controls ">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={interedTitle} onChange={(e)=> handleInputChange('title', e.target.value)}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={interedAmount} onChange={(e)=> handleInputChange('amount', e.target.value)}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' min='2019-01-01' max='2021-12-31' value={interedDate} onChange={(e)=> handleInputChange('date', e.target.value)}></input>
                </div>
            </div>
          <div className="new-expense__actions">
            <button className='collapse-button' value='hide' onClick={props.handleCollapse}>hide</button>
            <input type='submit' value='Add Expense'></input>
          </div>
        </form>
    )
}
export default ExpenseForm;