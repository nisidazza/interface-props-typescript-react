import React from "react";
import "./BudgetOverview.css";
import Budget from "../interfaces";
import BudgetItem from "./BudgetItem";

interface BudgetProps {
  budgets: Budget[];
}

export const BudgetOverview: React.FC<BudgetProps> = ({
  budgets,
}: BudgetProps) => {
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
          {budgets.map((item) => {
            return (
              <BudgetItem
                budgeted={item.budgeted}
                spent={item.spent}
                category={item.category}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetOverview;
