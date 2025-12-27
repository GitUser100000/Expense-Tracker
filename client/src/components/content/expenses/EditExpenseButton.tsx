import { useState } from "react";
import { Modal } from "../Modal";
import { AddEditExpenseForm } from "./AddEditExpenseForm";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Expense } from "@/context/types";

export function EditExpenseButton({ expense }: { expense: Expense }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenuItem onSelect={(e) => { e.preventDefault(); setOpen(true); }}>
        Edit
      </DropdownMenuItem>
      <Modal title="Edit Expense" description="Edit expense details" open={open} setOpen={setOpen}>
        <AddEditExpenseForm expense={expense} setOpen={setOpen} />
      </Modal>
    </>
  );
}

