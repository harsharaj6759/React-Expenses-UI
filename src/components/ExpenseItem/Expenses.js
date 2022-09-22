import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    let expenseContents = <p>No Expenses Found!</p>;
    
    if (filteredExpenses.length > 0) {
        expenseContents = filteredExpenses.map((expense) => (
          <ExpenseItem 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          />
      ))
    }
  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />     
      {expenseContents}
    </Card>
  );
}

export default Expenses;
