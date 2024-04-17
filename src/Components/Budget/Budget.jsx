import { useContext } from "react";
import {ContextBudgetPlannerWebApp} from "../Context/ContextBudgetPlannerWebApp";

export default function Budget(){
  let { stateTotalBudget} = useContext(ContextBudgetPlannerWebApp);
  return (
    <div className="bg-green-300 p-[1rem] rounded-md">
      Budget : ₹ {stateTotalBudget}
    </div>
  );
}