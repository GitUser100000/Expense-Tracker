import ExpenseList from "@/components/content/expenses/ExpenseList";
import { Button } from "@/components/ui/button";

export default function ExpensesPage() {
  return (
    <>
      <div className="text-center align-middle pt-20">
        <Button className="bg-green-500 text-white w-40 h-10">Add New</Button>
      </div>
      <div className="w-[90%] mx-auto">
        <ExpenseList />
      </div>
    </>
  );
}
