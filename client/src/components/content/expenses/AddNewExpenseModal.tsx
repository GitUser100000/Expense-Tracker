import AddButton from "../AddButton";
import { Modal } from "../Modal";

export default function AddNewExpenseModal() {
  function handleSave() {

  }
  return (
    <Modal title="Herrow" description="There" handleSave={handleSave} button={<AddButton />}>
      <h1>Howdy</h1>
    </Modal>
  )
}