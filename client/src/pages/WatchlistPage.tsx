import Watchlist from "@/components/content/watchlist/Watchlist";
import { Button } from "@/components/ui/button";

export default function ExpensesPage() {
  return (
    <>
      <div className="text-center align-middle pt-10 ">
        <Button className="bg-green-500 text-white w-40 h-10 cursor-pointer">Add New</Button>
      </div>
      <div className="w-[90%] mx-auto">
        <Watchlist />
      </div>
    </>
  );
}
