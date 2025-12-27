import AddButton from "../AddButton";
import { Modal } from "../Modal";
import { AddEditExpenseForm } from "./AddEditExpenseForm";
import { useState } from "react";
// import { Expense } from "@/context/types";

export type AddEditFormOptions= {
  edit: boolean,
  id?: number
}
export default function AddNewExpenseModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal title="Add Expense" description="..." button={<AddButton />} open={open} setOpen={setOpen}>
        <AddEditExpenseForm setOpen={setOpen}/>
    </Modal>
  )
}