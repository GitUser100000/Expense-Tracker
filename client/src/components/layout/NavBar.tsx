import { Clock } from "lucide-react";
import NavItem from "./NavItem";

export function NavBar() {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-1/2 -translate-x-1/2 w-[35%] flex justify-center gap-10">
        <NavItem title="Metrics" route="/metrics" />
        <NavItem title="Expenses" route="/expenses" />
        <NavItem title="Watchlist" route="/watchlist" />
        <NavItem title="Settings" route="/settings" />
      </div>
      <button className="ml-auto cursor-pointer pr-20">
        <Clock />
      </button>
    </div>
  );
}
