import ContentCard from "../ContentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { Expense } from "@/context/types";
import QuickExpense from "./QuickExpense";

const mockExpenses: Expense[] = [
  {
    id: 1,
    name: "Spotify",
    price: 22.0,
    occurance: "MONTHLY",
    category: "ENTERTAINMENT",
    nextChargeDate: "1970-01-01T00:00:00Z",
    paymentType: "DEBIT_CARD",
  },
  {
    id: 2,
    name: "Netflix",
    price: 16.99,
    occurance: "MONTHLY",
    category: "ENTERTAINMENT",
    nextChargeDate: "1970-01-05T00:00:00Z",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 3,
    name: "Gym Membership",
    price: 65.0,
    occurance: "MONTHLY",
    category: "UTILITIES",
    nextChargeDate: "1970-01-10T00:00:00Z",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 4,
    name: "Electricity Bill",
    price: 120.5,
    occurance: "MONTHLY",
    category: "UTILITIES",
    nextChargeDate: "1970-02-01T00:00:00Z",
    paymentType: "CREDIT_CARD",
  },
  {
    id: 5,
    name: "Phone Plan",
    price: 45.0,
    occurance: "MONTHLY",
    category: "UTILITIES",
    nextChargeDate: "1970-01-15T00:00:00Z",
    paymentType: "DEBIT_CARD",
  },
];

export default function TopExpense() {
  return (
    <div>
      <ContentCard title="Top Expenses">
        <ScrollArea className="h-72 w-[90%] rounded-md border mx-auto mt-5">
          <div className="p-4">
            {mockExpenses.map((expense, index) => (
              <React.Fragment key={expense.id}>
                <QuickExpense expense={expense} index={index} />
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </ContentCard>
    </div>
  );
}
