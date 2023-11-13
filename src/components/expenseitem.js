import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './expenseDate';

const ExpenseItem = ({date, title, amount}) =>{
    let [newTitle, setTitle] = useState(title);
    const changeTitle =()=>{
        setTitle('updated');
    }

    return(
        
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={changeTitle}> changeTitle</button>
        </div>
    );
    
}

export default ExpenseItem;