import { NavBar } from "@/components/layout/NavBar";
import { Outlet } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";

export default function Layout() {
  return (
    <div className="mx-auto w-full bg-accent/75">
      <Card className="w-full rounded-none">
        <CardTitle className="w-full text-center">
          <h1 className="justify-center">Expenses App</h1>
        </CardTitle>
        <NavBar />
      </Card>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
