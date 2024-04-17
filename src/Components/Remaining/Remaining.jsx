import {ContextBudgetPlannerWebApp} from "../Context/ContextBudgetPlannerWebApp";
import { useContext } from "react";

export default function Remaining(){
  let { stateExpenses, stateTotalBudget} = useContext(ContextBudgetPlannerWebApp);

  return (
    <div className="bg-blue-300 p-[1rem] rounded-md">
      Remaining : ₹ {stateTotalBudget-stateExpenses.spentSoFar}
    </div>
  );
}