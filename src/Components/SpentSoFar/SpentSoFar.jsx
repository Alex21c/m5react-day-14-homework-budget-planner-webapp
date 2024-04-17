import { useContext } from "react";
import {ContextBudgetPlannerWebApp} from "../Context/ContextBudgetPlannerWebApp";

export default function SpentSoFar(){
  let { stateExpenses} = useContext(ContextBudgetPlannerWebApp);
  return (
    <div className="bg-red-300 p-[1rem] rounded-md">
      Spent So far : ₹ {stateExpenses.spentSoFar}
    </div>
  );
}