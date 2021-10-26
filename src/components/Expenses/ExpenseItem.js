import React, { useState } from "react"; // importing React (optional)

import ExpenseDate from "./ExpenseDate"; // importing expenseDate
import Card from "../UI/Card"; // card componet that is set for css styles
import "./ExpenseItem.css"; // importing css styles

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log("Expense item  evaluated by react");

  const clickHanderler = () => {
    setTitle("Updated ✅");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHanderler}>Change Title</button>
    </Card>
  );
};
// arrow function returning Expenses item component with info from array. object that is rendered on app.js
export default ExpenseItem; // exporting component
