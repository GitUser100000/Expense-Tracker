import type { Expense } from "@/context/types";
import AddButton from "../AddButton";
import { Modal } from "../Modal";
import { AddEditExpenseForm } from "./AddEditExpenseForm";
import { useState } from "react";
// import { Expense } from "@/context/types";

type Props = {
  expense: Expense;
  open: boolean;
  setOpen: (open: boolean) => void;
};
export default function AddNewExpenseModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal title="Edit Expense" description="..." button={<AddButton />} open={open} setOpen={setOpen}>
        <AddEditExpenseForm setOpen={setOpen}/>
    </Modal>
  )
}