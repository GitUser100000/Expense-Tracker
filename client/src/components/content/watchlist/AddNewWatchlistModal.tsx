import AddButton from "../AddButton";
import { Modal } from "../Modal";
import { AddEditWatchlistForm } from "./AddEditWatchlistForm";
import { useState } from "react";

export default function AddNewWatchlistModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal title="Add Watchlist Item" description="Track price changes" button={<AddButton />} open={open} setOpen={setOpen}>
      <AddEditWatchlistForm setOpen={setOpen} />
    </Modal>
  )
}
