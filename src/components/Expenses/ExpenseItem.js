import React from "react"; // importing React (optional)

import ExpenseDate from "./ExpenseDate"; // importing expenseDate
import Card from "../UI/Card"; // card componet that is set for css styles
import "./ExpenseItem.css"; // importing css styles

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
};
// arrow function returning Expenses item component with info from array. object that is rendered on app.js
export default ExpenseItem; // exporting component
