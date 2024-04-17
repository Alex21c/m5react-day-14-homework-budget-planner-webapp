import {ContextBudgetPlannerWebApp} from '../Context/ContextBudgetPlannerWebApp';
import { useContext, useEffect } from 'react';

export default function TestComponent(){
  let {stateAlex21c} = useContext(ContextBudgetPlannerWebApp); 
  // useEffect(()=>{
  //   console.log(ContextBudgetPlannerWebApp)
  // }, []);
  return (
    <div className="text-stone-200">
      test component loaded.
    </div>
  );
}