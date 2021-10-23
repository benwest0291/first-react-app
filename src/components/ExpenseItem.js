import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>October 23rd 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurence</h2>
        <div className="expense-item__price">£249.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
