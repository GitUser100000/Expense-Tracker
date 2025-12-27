import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteExpenseById } from "@/api/expenses";
import { useDataContext } from "@/context/data/DataContext";
import { toast } from "sonner";
import type { Expense } from "@/context/types";

export function DeleteExpenseButton({ expense }: { expense: Expense }) {
  const { removeExpense } = useDataContext();

  async function handleDelete() {
    try {
      await deleteExpenseById(expense.id);
      removeExpense(expense.id);
      toast(`${expense.name} deleted`);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Failed to delete expense");
    }
  }

  return (
    <DropdownMenuItem onClick={handleDelete} className="text-destructive">
      Delete
    </DropdownMenuItem>
  );
}

