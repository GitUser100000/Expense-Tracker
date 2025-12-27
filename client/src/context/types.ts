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
|  "SUBSCRIPTIONS"
|  "FOOD"
|  "TRANSPORT"
|  "RENT"
|  "UTILITIES"
|  "HEALTH"
|  "SHOPPING"
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
  url: string | null
}
export type NewExpense = Omit<Expense, "id">;


export type WatchlistItem = {
  id: number,
  name: string,
  url: string | null,
  previous: number | null,
  current: number | null,
}

export type NewWatchlistItem = Omit<WatchlistItem, "id" | "previous" | "current">

export type DataContextState = {
  expenses: Expense[],
  watchlist: WatchlistItem[],
}

export type DataContextValue = {
  data: DataContextState,
  setExpenses: (updateExpenses: Expense[]) => void,
  addExpense: (newExpense: Expense) => void,
  updateExpense: (expense: Expense) => void,
  removeExpense: (id: number) => void,
  setWatchlist: (updatedWatchlist: WatchlistItem[]) => void,
  addWatchlistItem: (newItem: WatchlistItem) => void,
  updateWatchlistItem: (item: WatchlistItem) => void,
  removeWatchlistItem: (id: number) => void,
}

export type DataAction = 
  | { type: "SET_EXPENSES"; payload: Expense[] }
  | { type: "ADD_EXPENSE"; payload: Expense }
  | { type: "UPDATE_EXPENSE"; payload: Expense }
  | { type: "REMOVE_EXPENSE"; payload: number }
  | { type: "SET_WATCHLIST"; payload: WatchlistItem[] }
  | { type: "ADD_WATCHLIST_ITEM"; payload: WatchlistItem }
  | { type: "UPDATE_WATCHLIST_ITEM"; payload: WatchlistItem }
  | { type: "REMOVE_WATCHLIST_ITEM"; payload: number };

