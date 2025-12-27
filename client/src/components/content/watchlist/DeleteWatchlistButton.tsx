import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteWatchlistItemById } from "@/api/watchlist";
import { useDataContext } from "@/context/data/DataContext";
import { toast } from "sonner";
import type { WatchlistItem } from "@/context/types";

export function DeleteWatchlistButton({ watchlistItem }: { watchlistItem: WatchlistItem }) {
  const { removeWatchlistItem } = useDataContext();

  async function handleDelete() {
    try {
      await deleteWatchlistItemById(watchlistItem.id);
      removeWatchlistItem(watchlistItem.id);
      toast(`${watchlistItem.name} deleted`);
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Failed to delete item");
    }
  }

  return (
    <DropdownMenuItem onClick={handleDelete} className="text-destructive">
      Delete
    </DropdownMenuItem>
  );
}

