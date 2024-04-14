import './App.css';
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css';
import Budget from './Components/Budget/Budget';
import Remaining from './Components/Remaining/Remaining';
import SpentSoFar from './Components/SpentSoFar/SpentSoFar';
import AddExpense from './Components/AddExpense/AddExpense';
import Expenses from './Components/Expenses/Expenses';
function App() {
  return (
    <div className='mt-[2rem] pt-[1rem] border-2 border-slate-200 p-[2rem] w-[70rem]  m-auto rounded-md  text-[1.2rem] text-stone-700 flex gap-[1rem] flex-col items-center'>
      <h2 className="appTitle text-blue-300 text-[2.5rem] font-semibold smallCaps flex flex-col gap-[0rem]  text-center">
        <span>Budget Planner WebApp</span>
        <span className="text-[1.5rem] font-normal italic">( <a href="https://geekster.in/" className="underline hover:text-yellow-300 transition">Geekster</a> Module#5 React Day #14 Homework :)</span>
      </h2>

   
        <div className='flex flex-col gap-[.5rem] items-center  border-0 border-slate-200'>
          <div className='max-w-[25rem]'>
            <img src={require('./Assests/Images/budgetGraphic.png')} alt="Budget Graphic"/>
          </div>
          <div className='flex  gap-[1rem]'>
            <div className='flex flex-col gap-[.2rem] w-[20rem]'>
              <Budget/>
              <Remaining/>
              <SpentSoFar/>
            </div>
            <div>
              <AddExpense/>
            </div>
          </div>

          <div className='self-start'>
            <Expenses/>
          </div>
        </div>

     
    </div>

  );
}

export default App;
