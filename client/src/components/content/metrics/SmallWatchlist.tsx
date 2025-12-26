import ContentCard from "../ContentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { WatchlistItem } from "@/context/types";
import QuickWatchlist from "./QuickWatchlist";

const mockWatchlist: WatchlistItem[] = [
  {
    id: 1,
    name: "Apple Inc.",
    previous: 170.25,
    current: 182.4,
    markup: 7.14,
  },
  {
    id: 2,
    name: "Tesla",
    previous: 245.0,
    current: 231.8,
    markup: -5.39,
  },
  {
    id: 3,
    name: "Microsoft",
    previous: 312.1,
    current: 328.55,
    markup: 5.27,
  },
  {
    id: 4,
    name: "Amazon",
    previous: 145.3,
    current: 151.9,
    markup: 4.54,
  },
  {
    id: 5,
    name: "NVIDIA",
    previous: 480.0,
    current: 525.75,
    markup: 9.53,
  },
];

export default function SmallWatchlist() {
  return (
    <div>
      <ContentCard title="Watchlist">
        <ScrollArea className="h-72 w-[90%] rounded-md border mx-auto mt-5">
          <div className="p-4">
            {mockWatchlist.map((watchlistItem, index) => (
              <React.Fragment key={watchlistItem.id}>
                <QuickWatchlist
                  watchlistItem={watchlistItem}
                  index={index + 1}
                />
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </ContentCard>
    </div>
  );
}
