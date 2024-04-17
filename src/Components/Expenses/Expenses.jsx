import {ContextBudgetPlannerWebApp} from "../Context/ContextBudgetPlannerWebApp";
import { useContext } from "react";
export default function Expenses(){
  let { stateExpenses, dispatch} = useContext(ContextBudgetPlannerWebApp);

  return (
    <section className="text-slate-200 flex flex-col gap-[1rem]">
      <h2 className="font-semibold text-[2rem]">Expenses</h2>
      {
       stateExpenses.spentSoFar>0 &&  Object.entries(stateExpenses).map(( [idx, expense])=>{
          if(idx !== "nextExpenseUniqueID" & idx !== "spentSoFar"){
            //console.log(expense);
            return (
              <div key={`expense-${idx}`} className="flex justify-between max-w-[25rem] items-center bg-blue-300 text-stone-700 py-[.5rem] p-[1rem] rounded-md">
                <span>{expense.expenseName}</span>
                <span>₹{expense.cost}</span>
                <i data-id={idx} className="fa-solid fa-circle-xmark text-[2rem] hover:text-green-300 cursor-pointer transition" onClick={(event)=>{
                  dispatch(
                    {type: "removeExpense", payload : event.target.getAttribute('data-id')}
                  )
                }}
                ></i>
              </div>            
            );
          }
        })
      }

    </section>
  );
}