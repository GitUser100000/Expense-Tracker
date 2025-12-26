import AddNewExpenseModal from "@/components/content/expenses/AddNewExpenseModal";
import ExpenseList from "@/components/content/expenses/ExpenseList";

export default function ExpensesPage() {
  return (
    <>
      <div className="text-center align-middle pt-10 ">
        <AddNewExpenseModal />
      </div>
      <div className="w-[90%] mx-auto">
        <ExpenseList />
      </div>
    </>
  );
}
