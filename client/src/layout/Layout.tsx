import { NavBar } from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Expenses App</h1>
      </header>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
