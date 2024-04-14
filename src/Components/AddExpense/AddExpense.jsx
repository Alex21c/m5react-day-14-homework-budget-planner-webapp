export default function AddExpense(){
  return (
    
      <form class="signInForm flex flex-col gap-[.5rem] w-[20rem]">
        
        <input autoComplete={false} type="text" placeholder="Expense Name" class=" text-stone-700 transition focus:outline focus:outline-2 focus:outline-green-500 p-[1rem] rounded-md bg-stone-200 relative w-[100%]" />
        <input type="number" placeholder="Cost" class=" text-stone-700 transition focus:outline focus:outline-2 focus:outline-green-500 p-[1rem] rounded-md bg-stone-200 relative w-[100%]" />
        <button class="outline-amber-50 bg-yellow-300 hover:bg-yellow-500 transition cursor-pointer px-[1.3rem] py-[.3rem] rounded-md hover:text-slate-50 text-stone-700 text-[1.5rem] flex gap-[.5rem] items-center justify-center">
          <i class="fa-solid fa-coins text-[2rem]">
          </i><span class="text-[1.5rem] font-medium">Add Expense</span>
        </button>
      </form>    
 
  );
}