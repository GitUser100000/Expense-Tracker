import React from "react";

export default function ContentCard({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex-col w-[80%] mx-auto">
      <h2 className="ml-0 pl-2 text-2xl font-sem">{title}</h2>
      {children}
    </div>
  );
}

// import { Card } from "@/components/ui/card";
// import { TrendingUp } from "lucide-react";

// export default function Total() {
//   return (
//     <div className="flex-col w-[80%] mx-auto">
//       <h2 className="ml-0 pl-2 text-2xl font-sem">Total</h2>
//       <h1 className="text-3xl text-center pb-5 font-semibold">$900</h1>
//       <Card className="flex-row justify-center items-center primary">
//         <span className="w-fit">
//           <TrendingUp />
//         </span>
//         <h3 className="w-fit">15%</h3>
//         <span /> {/* spacer */}
//       </Card>
//     </div>
//   );
// }
