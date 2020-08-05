import React from "react";
import "./BudgetOverview.css";
import Budget from "../interfaces";

interface BudgetProps {
  budgets: Budget[];
}

export const BudgetOverview = () => {

  return (
    <div className="Budget-Overview">
      <table>
        <tbody>
          <tr className="Table-Header">
            <td>
              <h4>CATEGORY</h4>
            </td>
            <td>
              <h4>BUDGETED</h4>
            </td>
            <td>
              <h4>SPENT</h4>
            </td>
            <td>
              <h4>REMAINING</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetOverview;
