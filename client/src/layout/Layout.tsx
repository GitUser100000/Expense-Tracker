import { NavBar } from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Card, CardTitle } from "@/components/ui/card";

export default function Layout() {
  return (
    <div className="mx-auto w-full rounded-none">
      <Card className="w-full">
        <CardTitle>
          <h1>Expenses App</h1>
        </CardTitle>
        <NavBar />
      </Card>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
