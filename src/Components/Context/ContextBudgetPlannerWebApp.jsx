
import { createContext, useEffect } from "react";
  export const ContextBudgetPlannerWebApp = createContext(null);


  const ContextProviderFoodCartWebApp = ({children}) =>{


    let [stateWhoIsCurrentPage, updateStateWhoIsCurrentPage] = useState(null);


    // useEffect() can be used to initialize and update states here as well
    useEffect(()=>{}, []);
   
    const contextValue = {
      stateWhoIsCurrentPage, updateStateWhoIsCurrentPage
    };
   
    return (
      <ContextBudgetPlannerWebApp.Provider value={contextValue}>
        {children}
      </ContextBudgetPlannerWebApp.Provider>


    );
  }


  export default ContextProviderFoodCartWebApp;