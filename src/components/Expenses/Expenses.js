import React from "react"; // importing React (Optional)

import ExpenseItem from "./ExpenseItem"; // importing ExpenseItem
import Card from "../UI/Card"; // card componet that is set for css styles
import "./Expenses.css"; // importing css styles

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};
// Arrow function that has all 4 objects info that will pass th info from props to the Expenense item.js to render in app.js
export default Expenses; // exporting component
