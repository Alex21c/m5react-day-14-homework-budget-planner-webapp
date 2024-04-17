import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import Budget from './Components/Budget/Budget';
import Remaining from './Components/Remaining/Remaining';
import SpentSoFar from './Components/SpentSoFar/SpentSoFar';
import AddExpense from './Components/AddExpense/AddExpense';
import Expenses from './Components/Expenses/Expenses';
import TestComponent from './Components/AddExpense/TestComponent';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';


function App() {
  const [stateOpenSnackBar, updateStateOpenSnackBar] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    updateStateOpenSnackBar(false);
  };

  return (
    <div className='wrapperBudgetPlannerWebApp mt-[2rem] pt-[1rem] border-2 border-slate-200 p-[2rem] w-[70rem]  m-auto rounded-md  text-[1.2rem] text-stone-700 flex gap-[1rem] flex-col items-center'>


    <Snackbar open={stateOpenSnackBar} autoHideDuration={7000} onClose={handleClose}   anchorOrigin={{vertical:'top', horizontal:'center'}}>
      <Alert
        onClose={handleClose}
        severity="warning"
        sx={{ width: '100%' }}
      >
        <AlertTitle>Insufficient Remaning Balance!</AlertTitle>
        How can you afford to buy?
      </Alert>
    </Snackbar>


      <h2 className="appTitle text-blue-300 text-[2.5rem] font-semibold smallCaps flex flex-col gap-[0rem]  text-center">
        <span>Budget Planner WebApp</span>
        <span className="text-[1.5rem] font-normal italic">( <a href="https://geekster.in/" className="underline hover:text-yellow-300 transition">Geekster</a> Module#5 React Day #14 Homework :)</span>
      </h2>

   
        <div className='flex flex-col gap-[.5rem] items-center  border-0 border-slate-200'>
          <div className='max-w-[25rem]'>
            <img src={require('./Assests/Images/budgetGraphic.png')} alt="Budget Graphic"/>
          </div>
          <div className='wrapperAddExpenseAndBudgetDivs flex  gap-[1rem]'>
            <div className='wrapperThreeDivsBudget flex flex-col gap-[.2rem] w-[20rem]'>
              <Budget/>
              <Remaining/>
              <SpentSoFar/>
            </div>
            <div>
              <AddExpense updateStateOpenSnackBar={updateStateOpenSnackBar}/>
              
            </div>
          </div>

          <div className='self-start w-[100%]'>
            <Expenses/>
          </div>
        </div>

     
    </div>

  );
}

export default App;
