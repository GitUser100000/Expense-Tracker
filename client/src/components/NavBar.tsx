import { NavLink } from "react-router-dom"
import { navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { SlidersHorizontal } from 'lucide-react';

export function NavBar() {
  return (
    <div className="">
      <NavLink
        to="/metrics"
        className={({ isActive }) =>
          navigationMenuTriggerStyle({
            className: isActive ? "bg-accent text-accent-foreground" : ""
          })
        }
      >
        Metrics
      </NavLink>
      <NavLink
        to="/expenses"
        className={({ isActive }) =>
          navigationMenuTriggerStyle({
            className: isActive ? "bg-accent text-accent-foreground" : ""
          })
        }
      >
        Expenses
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          navigationMenuTriggerStyle({
            className: isActive ? "bg-accent text-accent-foreground" : ""
          })
        }
      >
        Watchlist
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          navigationMenuTriggerStyle({
            className: isActive ? "bg-accent text-accent-foreground" : ""
          })
        }
      >
        Settings
      </NavLink>
      <button><SlidersHorizontal /></button>
    </div>
  )
}


