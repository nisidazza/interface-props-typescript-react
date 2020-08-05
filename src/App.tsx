import React from "react";
import BudgetOverview from "./components/BudgetOverview";
import "./App.css";

const homeBudget = [
  {
    budgeted: 500,
    spent: 200,
    category: "Food",
  },
  {
    budgeted: 1000,
    spent: 1500,
    category: "Utilities",
  },
  {
    budgeted: 500,
    spent: 300,
    category: "Shopping",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BudgetOverview budgets={homeBudget} />
    </div>
  );
}

export default App;
