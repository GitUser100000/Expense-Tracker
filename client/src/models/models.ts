import type { Currency, Theme } from "@/context/types"

export type User = {
  name: string,
  theme: Theme,
  currency: Currency
}

export type Cadence = 
  | "ONE_TIME"
  | "DAILY"
  | "WEEKLY"
  | "FORTNIGHTLY"
  | "MONTHLY"
  | "YEARLY"

export type Category = 
  |  "ENTERTAINMENT"
  |  "FOOD"
  |  "TRANSPORT"
  |  "RENT"
  |  "UTILITIES"
  |  "OTHER"

  export type PaymentType = 
  |  "CREDIT_CARD"
  |  "DEBIT_CARD"
  |  "CASH"

export type Expesne = {
  name: string,
  price: number,
  occurance: Cadence,
  category: Category,
  nextChargeDate: string
  paymentType: PaymentType
  url?: string
}
