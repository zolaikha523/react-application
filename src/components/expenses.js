import { useState } from 'react';
import ExpenseItem from './expenseitem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) =>{
           const [mySelectedYear, setSelectedYear] = useState("");
           let pcontent="the year 2020,2021 & 2022 is hedin";

           if(mySelectedYear == '2020'){
            pcontent="the year 2019,2021 & 2022 is hedin";  
            }
            else if(mySelectedYear == '2021'){
                pcontent="the year 2019,2020 & 2022 is hedin";  
            }
            else if(mySelectedYear == '2022'){
                pcontent="the year 2019,2021 & 2020 is hedin";  
            }

            const getYear = (selectedYear) =>{
                setSelectedYear(selectedYear);
            
            } 

            const filteredExpense = props.expenses.filter((expense) =>{
               const expenseYear = expense.date.getFullYear().toString()
                console.log(expenseYear)
                return expenseYear === mySelectedYear  
       
            });
            
        
            
                return (
                    <div className='expenses'>
                        
                        <ExpensesFilter selectedYear={mySelectedYear} onselectsdYear={getYear}/>
                        <p>{pcontent}</p>
                        <ExpenseChart expenses={filteredExpense}/>
                        <ExpensesList filteredExpense={filteredExpense}/>
                       
                    </div>     
        
                )}
                        
     
export default Expenses;