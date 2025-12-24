import type { WatchlistItem } from "@/context/types";
import { Button } from "@/components/ui/button";
import { SmallTrend } from "@/components/ui/icons";

export default function QuickWatchlist({
  watchlistItem,
}: {
  watchlistItem: WatchlistItem;
  index: number;
}) {
  return (
    <div className="grid grid-cols-[2fr_1fr_2fr_auto] items-center gap-2">
      <span>{watchlistItem.name} </span>
      <span>(${watchlistItem.current}) </span>
      <SmallTrend percent={1.5} />
      <Button>Set</Button>
    </div>
  );
}
