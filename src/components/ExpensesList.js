import ExpenseItem from "./expenseitem";
import Expenses from "./expenses";
let styles ={
    textAlign:'center',
    color:'#777',
    fontSize:'22px',
    fontWeight:'700'
}
const ExpensesList = ({filteredExpense})=>{
    
        
           if (filteredExpense.length===0){
            return <div style={styles}>Data Not Found</div>
           }
           else{
            return <ul>
                {filteredExpense.map((expense)=> {
                     return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
                })}
            </ul>
           }
        
    
    
}
export default ExpensesList;