import type { WatchlistItem } from "@/context/types";
import { Button } from "@/components/ui/button";
import { SmallTrend } from "@/components/ui/icons";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EditWatchlistButton } from "../watchlist/EditWatchlistButton";
import { DeleteWatchlistButton } from "../watchlist/DeleteWatchlistButton";

export default function QuickWatchlist({
  watchlistItem,
}: {
  watchlistItem: WatchlistItem;
  index: number;
}) {
  const { previous, current } = watchlistItem;
  const percent = previous && current && previous > 0 
    ? ((current - previous) / previous) * 100 
    : null;

  return (
    <div className="grid grid-cols-[2fr_1fr_2fr_auto] items-center gap-2">
      <span>{watchlistItem.name}</span>
      <span>{current !== null ? `$${Number(current).toFixed(2)}` : "—"}</span>
      {percent !== null ? <SmallTrend percent={percent} /> : <span className="text-muted-foreground">—</span>}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <EditWatchlistButton watchlistItem={watchlistItem} />
          <DeleteWatchlistButton watchlistItem={watchlistItem} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
