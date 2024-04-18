import { useReducer } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
export const ContextBudgetPlannerWebApp = createContext(null);


  const ContextProviderBudgetPlannerWebApp = ({children}) =>{


    
    function reducer(state, action){      
      // //console.log(action.payload);
      let previousState = state;   
      let previousItemCost = 0;
   

      switch (action.type){
        case "removeExpense":
          previousItemCost = Number((previousState[action.payload])?.cost);
          // //console.log( Number(previousState['spentSoFar']), action.payload, previousState, previousState[action.payload].cost);
          
          
          delete previousState[action.payload];
          

          // //console.log('removing', action);
          // return state;
          return {
            ...previousState,
            'spentSoFar': Number(previousState['spentSoFar'])-previousItemCost
          };
        case "AddExpense":
        // Safeguard
         
          return {
            ...state,
            [state.nextExpenseUniqueID] : {
              'expenseName': action.payload.expenseName,
              'cost': Number(action.payload.cost),
            },
            nextExpenseUniqueID : Number([state.nextExpenseUniqueID]) +1,
            spentSoFar: state.spentSoFar + Number(action.payload.cost) 


          }                  
        default:
        return state;
      }
    }

    let initialState = localStorage.getItem('alex21cBudgetPlannerWebApp');
    if(initialState){
      initialState = JSON.parse(initialState);
    }else{
      initialState ={
        nextExpenseUniqueID: 1,
        spentSoFar: 0
      }
    }
    let [stateExpenses, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
      //console.log(stateExpenses);
      localStorage.setItem ('alex21cBudgetPlannerWebApp', JSON.stringify(stateExpenses));

    }, [stateExpenses]);
    
    
    let [stateTotalBudget, updateStateTotalBudget] = useState(2000);

    const contextValue = {
      stateExpenses, dispatch, stateTotalBudget
    };

    
   
    return (
      <ContextBudgetPlannerWebApp.Provider value={contextValue}>
        {children}
      </ContextBudgetPlannerWebApp.Provider>


    );
  }


  export default ContextProviderBudgetPlannerWebApp;