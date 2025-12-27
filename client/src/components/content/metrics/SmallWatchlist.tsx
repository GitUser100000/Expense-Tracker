import ContentCard from "../ContentCard";
import { Clock } from "lucide-react";

export default function SmallWatchlist() {
  return (
    <ContentCard title="Watchlist">
      <div className="h-72 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
          <Clock className="w-6 h-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground font-medium">Coming Soon</p>
        <p className="text-xs text-muted-foreground/70">Track price changes on your subscriptions</p>
      </div>
    </ContentCard>
  );
}
