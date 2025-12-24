import { NavLink } from "react-router-dom";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

type NavItemProps = {
  route: string;
  title: string;
};

export default function NavItem({ title, route }: NavItemProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        navigationMenuTriggerStyle({
          className: isActive ? "bg-accent text-accent-foreground" : "",
        })
      }
    >
      {title}
    </NavLink>
  );
}
