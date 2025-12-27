import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"
import { FormDatePicker } from "../FormDatePicker"
import type { AddEditFormOptions } from "./AddNewExpenseModal"
import { createExpense, editExpenseById } from "@/api/expenses"
import type { Cadence, Category, Expense, NewExpense, PaymentType } from "@/context/types"
import { toast } from "sonner"

export type AddEditExpenseFormProps = {
  setOpen: (bool: boolean) => void,
  expense?: Expense
}

export function AddEditExpenseForm( {expense, setOpen}: AddEditExpenseFormProps) {
  const [name, setName] = React.useState<string | undefined>(expense ? expense.name : undefined);
  const [price, setPrice] = React.useState<number | undefined>(expense ? expense.price : undefined)
  const [occurance, setOccurance] = React.useState<Cadence | undefined>(expense ? expense.occurance : undefined)
  const [category, setCategory] = React.useState<Category | undefined>(expense ? expense.category : undefined)
  const [nextChargeDate, setNextChargeDate] = React.useState<Date | undefined>(expense ? new Date(expense.nextChargeDate) : undefined)
  const [paymentType, setPaymentType] = React.useState<PaymentType | undefined>(expense ? expense.paymentType : undefined)
  const [url, setUrl] = React.useState<string | undefined>(expense?.url ?? undefined)

  const formattedPrice =
  price !== undefined
    ? new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
      }).format(price)
    : "";
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const reqBody: Partial<Expense> = {};
    if (name !== undefined) reqBody.name = name;
    if (price !== undefined) reqBody.price = price;
    if (occurance !== undefined) reqBody.occurance = occurance;
    if (category !== undefined) reqBody.category = category;
    if (nextChargeDate !== undefined) reqBody.nextChargeDate = nextChargeDate.toISOString();
    if (paymentType !== undefined) reqBody.paymentType = paymentType;
    if (url !== undefined) reqBody.url = url;
    const isCompleteExpense =
      name !== undefined &&
      price !== undefined &&
      occurance !== undefined &&
      category !== undefined &&
      nextChargeDate !== undefined &&
      paymentType !== undefined;
    if (expense) {
      try {
      if (expense.id !== undefined)
        await editExpenseById(expense.id, reqBody);
        toast(`${expense.name} sucessfully ajusted`);
        setOpen(false);
        
      } catch(err) {
        if (err instanceof Error) toast.error(err.message);
        else toast.error(`Unkown Error: ${err}`);
      }
    } else {
      if (!isCompleteExpense) {
        toast.error("All fields must be populated");
        return;
      }
      const postBody: NewExpense = {
        name: name!,
        price: price!,
        occurance: occurance!,
        category: category!,
        nextChargeDate: nextChargeDate!.toISOString(),
        paymentType: paymentType!,
        url: url ?? null,
      };
      try {
        await createExpense(postBody);
        toast(`${postBody.name} sucessfully added`);
        setOpen(false);
      } catch(err) {
        if (err instanceof Error) toast.error(err.message);
        else toast.error(`Unkown Error: ${err}`);
      }
    }
  }
  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-6">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Evil Rabbit" value={name} onChange={(e) => setName(e.target.value)} required/>
            </Field>

            <Field>
              <FieldLabel>Price ($AUD)</FieldLabel>
              <Input type="number" step="0.01" placeholder="" required value={price ?? ""} onChange={(e) => setPrice(Number(e.target.value))}/>
            </Field>

            <Field>
              <FieldLabel>Occurance</FieldLabel>
              <Select required onValueChange={(value) => setOccurance(value as Cadence)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select occurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ONE_TIME">One Off</SelectItem>
                  <SelectItem value="DAILY">Daily</SelectItem>
                  <SelectItem value="WEEKLY">Weekly</SelectItem>
                  <SelectItem value="MONTHLY">Monthly</SelectItem>
                  <SelectItem value="YEARLY">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel>Category</FieldLabel>
              <Select required onValueChange={(value) => setCategory(value as Category)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ENTERTAINMENT">Entertainment</SelectItem>
                  <SelectItem value="FOOD">Food</SelectItem>
                  <SelectItem value="TRANSPORT">Transport</SelectItem>
                  <SelectItem value="RENT">Rent</SelectItem>
                  <SelectItem value="UTILITIES">Utilities</SelectItem>
                  <SelectItem value="OTHER">Other</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="space-y-6">
            <Field>
              <FieldLabel>Next Charge Date</FieldLabel>
              <FormDatePicker date={nextChargeDate} setDate={setNextChargeDate} />
            </Field>

            <Field>
              <FieldLabel>Payment Type</FieldLabel>
              <Select required onValueChange={(value) => setPaymentType(value as PaymentType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CREDIT_CARD">Credit Card</SelectItem>
                  <SelectItem value="DEBIT_CARD">Debit Card</SelectItem>
                  <SelectItem value="CASH">Cash</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel>Url</FieldLabel>
              <Input value={url} onChange={(e) => setUrl(e.target.value)}/>
            </Field>
          </div>
        </div>

        <FieldSeparator className="my-8" />

        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}
