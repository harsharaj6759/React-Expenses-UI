import "./NewExpenses.css";

import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.saveExpenseData(expenseData);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpenses;
