import { useState } from "react";
import { Modal } from "../Modal";
import { AddEditWatchlistForm } from "./AddEditWatchlistForm";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { WatchlistItem } from "@/context/types";

export function EditWatchlistButton({ watchlistItem }: { watchlistItem: WatchlistItem }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenuItem onSelect={(e) => { e.preventDefault(); setOpen(true); }}>
        Edit
      </DropdownMenuItem>
      <Modal title="Edit Watchlist Item" description="Update price tracking details" open={open} setOpen={setOpen}>
        <AddEditWatchlistForm watchlistItem={watchlistItem} setOpen={setOpen} />
      </Modal>
    </>
  );
}

