export type Currency = "AUD" | "USD" | "EUR";
export type Theme = "light" | "dark"

export type DateCadence = 
| "DAILY"
| "WEEKLY"
| "MONTHLY"
| "YEARLY"

export type DateRange = {
  cadence: DateCadence;
  startDate: Date;
  endDate?: Date
}

export type AppSettingState = {
  theme: Theme
  currency: Currency,
  dateRange: DateRange,
  loading: boolean,
  error: string | null
}

export type AppSettingsAction =
| { type: "SET_THEME"; payload: Theme; }
| { type: "SET_CURRENCY"; payload: Currency; }
| { type: "SET_DATE_RANGE"; payload: {
    cadence: DateCadence,
    startDate: Date,
}; }
| { type: "SET_CADENCE"; payload: DateCadence; }
| { type: "SET_LOADING"; payload: boolean; }
| { type: "SET_ERROR"; payload: string | null; }

export type AppContextValue = {
  appSettings: AppSettingState,
  setTheme: (theme: Theme) => void 
  setCurrency: (currency: Currency) => void
  setDateRange: (cadence: DateCadence, startDate: Date) => void
  setCadence: (cadence: DateCadence) => void
  setLoading: (isLoading: boolean) => void
  setError: (hasError: string | null) => void
}

export type User = {
  name: string,
  email: string,
  theme: Theme,
  currency: Currency
}

export type Cadence = 
| "ONE_TIME"
| "DAILY"
| "WEEKLY"
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

export type Expense = {
  id: number,
  name: string,
  price: number,
  occurance: Cadence,
  category: Category,
  nextChargeDate: string
  paymentType: PaymentType
  url?: string
}

export type WatchlistItem = {
  id: number,
  name: string,
  previous: number,
  current: number,
  markup: number
}

export type DataContextState = {
  expenses: Expense[],
  watchlist: WatchlistItem[],
}

export type DataContextValue = {
  data: DataContextState,
  setExpenses: (updateExpenses: Expense[]) => void,
  addExpense: (newExpense: Expense) => void,
  removeExpense: (id: number) => void,
  setWatchlist: (newExpenses: Expense[]) => void
  addWatchlistItem: (newExpense: Expense) => void,
  removeWatchlistItem: (id: number) => void,
}

export type DataAction = 
| { type: "SET_EXPESES"; payload: Expense[]}
| { type: "ADD_EXPENSE"; payload: Expense}
| { type: "REMOVE_EXPENSE"; payload: number}
| { type: "SET_WATCHLIST"; payload: Expense[]}
| { type: "ADD_WATCHLIST_ITEM"; payload: Expense}
| { type: "REMOVE_WATCHLIST_ITEM"; payload: number}
