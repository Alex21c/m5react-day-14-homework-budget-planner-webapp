import { useContext, useEffect, useRef } from 'react';
import {ContextBudgetPlannerWebApp} from "../Context/ContextBudgetPlannerWebApp";


export default function AddExpense({updateStateOpenSnackBar}){
  let { stateExpenses, dispatch, stateTotalBudget} = useContext(ContextBudgetPlannerWebApp);
  

  useEffect(()=>{
    // console.log(ContextBudgetPlannerWebApp);
  }, []);



  function handleRequestAddExpense(event){
    event.preventDefault();
    if(refExpenseName.current.value === "" || refCost.current.value===""){
      return;
    }
    let remainingBudgetAmount = (stateTotalBudget-stateExpenses.spentSoFar);
    if(remainingBudgetAmount <= Number(refCost.current.value)){
      // console.log('How can you afford to buy?')
      updateStateOpenSnackBar(true);
      return;
    }


    dispatch({type: 'AddExpense', payload: {
      expenseName: refExpenseName.current.value,
      cost: refCost.current.value
    }});
  }
  let refExpenseName = useRef(null), refCost = useRef(null);

  return (
    
      <form className="formAddExpense flex flex-col gap-[.5rem] w-[20rem]">
        
        <input ref={refExpenseName} type="text" placeholder="Expense Name" className=" text-stone-700 transition focus:outline focus:outline-2 focus:outline-green-500 p-[1rem] rounded-md bg-stone-200 relative w-[100%]" />
        <input ref={refCost} type="number" placeholder="Cost" className=" text-stone-700 transition focus:outline focus:outline-2 focus:outline-green-500 p-[1rem] rounded-md bg-stone-200 relative w-[100%]" />
        <button onClick={handleRequestAddExpense} className="outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer px-[1.3rem] py-[.3rem] rounded-md hover:text-slate-50 text-stone-700 text-[1.5rem] flex gap-[.5rem] items-center justify-center">
          <i className="fa-solid fa-coins text-[2rem]">
          </i><span className="text-[1.5rem] font-medium">Add Expense</span>
        </button>
      </form>    
 
  );

  return (<div>testing</div>);
}