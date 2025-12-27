import { getUserExpenses } from "@/api/expenses";
import type {
  DataContextState,
  DataContextValue,
  DataAction,
  Expense,
  WatchlistItem,
} from "../types";
import { DataContext } from "./DataContext";
import { useEffect, useReducer } from "react";
import { getUserWatchlist } from "@/api/watchlist";

const expenses: Expense[] = [];
const watchlist: WatchlistItem[] = [];

const initialDataContext: DataContextState = {
  expenses,
  watchlist,
};

function dataReducer(state: DataContextState, action: DataAction) {
  switch (action.type) {
    case "SET_EXPENSES":
      return { ...state, expenses: action.payload };

    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };

    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map(e =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(e => e.id !== action.payload),
      };

    case "SET_WATCHLIST":
      return { ...state, watchlist: action.payload };

    case "ADD_WATCHLIST_ITEM":
      return { ...state, watchlist: [...state.watchlist, action.payload] };

    case "UPDATE_WATCHLIST_ITEM":
      return {
        ...state,
        watchlist: state.watchlist.map(w =>
          w.id === action.payload.id ? action.payload : w
        ),
      };

    case "REMOVE_WATCHLIST_ITEM":
      return {
        ...state,
        watchlist: state.watchlist.filter(w => w.id !== action.payload),
      };

    default:
      return state;
  }
}


export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, dispatch] = useReducer(dataReducer, initialDataContext);

  const setExpenses = (updatedExpenses: Expense[]) => {
    dispatch({ type: "SET_EXPENSES", payload: updatedExpenses });
  };

  const addExpense = (newExpenses: Expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: newExpenses });
  };

  const updateExpense = (updatedExpense: Expense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: updatedExpense });
  };

  const removeExpense = (id: number) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: id });
  };

  const setWatchlist = (updatedWatchlist: WatchlistItem[]) => {
    dispatch({ type: "SET_WATCHLIST", payload: updatedWatchlist });
  };

  const addWatchlistItem = (newWatchlistItem: WatchlistItem) => {
    dispatch({ type: "ADD_WATCHLIST_ITEM", payload: newWatchlistItem });
  };

  const updateWatchlistItem = (updatedItem: WatchlistItem) => {
    dispatch({ type: "UPDATE_WATCHLIST_ITEM", payload: updatedItem });
  };

  const removeWatchlistItem = (id: number) => {
    dispatch({ type: "REMOVE_WATCHLIST_ITEM", payload: id });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const expenses = await getUserExpenses();
        const watchlist = await getUserWatchlist();
        setExpenses(expenses);
        setWatchlist(watchlist); 
      } catch(err) {
        if (err instanceof Error) console.log(err.message); 
        console.log(err);
      }
    }
    fetchData();
  }, [])

  const value: DataContextValue = {
    data,
    setExpenses,
    addExpense,
    updateExpense,
    removeExpense,
    setWatchlist,
    addWatchlistItem,
    updateWatchlistItem,
    removeWatchlistItem,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
