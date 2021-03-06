import React from "react"; // importing React (Optional)
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses"; // importing Expenses.js

// Aray of Objects
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Bog Paper",
      amount: 94.12,
      date: new Date(2021, 9, 25),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 5, 24),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 3, 23),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("im in app.js");
    console.log(expense);
  };
  // redering a div with Expenses Component with props of expenses
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App; // Exporting to APP to render in browser
