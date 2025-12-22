import type {
  DataContextState,
  DataContextValue,
  DataAction,
  Expense,
  WatchlistItem,
} from "../types";
import { DataContext } from "./DataContext";
import { useReducer } from "react";

const expenses: Expense[] = [];
const watchlist: WatchlistItem[] = [];

const initialDataContext: DataContextState = {
  expenses,
  watchlist,
};

function dataReducer(state: DataContextState, action: DataAction) {
  switch (action.type) {
    case "SET_EXPESES": {
      return {
        ...state,
        expenses: action.payload,
      };
    }
    case "ADD_EXPENSE": {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        ...state,
        expenses: [...state.expenses].filter(
          (expense) => expense.id !== Number(action.payload)
        ),
      };
    }
    case "SET_WATCHLIST": {
      return {
        ...state,
        expenses: action.payload,
      };
    }
    case "ADD_WATCHLIST_ITEM": {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case "REMOVE_WATCHLIST_ITEM": {
      return {
        ...state,
        expenses: [...state.expenses].filter(
          (expense) => expense.id !== Number(action.payload)
        ),
      };
    }
  }
}

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, dispatch] = useReducer(dataReducer, initialDataContext);

  const setExpenses = (updatedExpenses: Expense[]) => {
    dispatch({ type: "SET_EXPESES", payload: updatedExpenses });
  };

  const addExpense = (newExpenses: Expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: newExpenses });
  };

  const removeExpense = (id: number) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: id });
  };

  const setWatchlist = (updatedWatchlist: Expense[]) => {
    dispatch({ type: "SET_WATCHLIST", payload: updatedWatchlist });
  };

  const addWatchlistItem = (newExpense: Expense) => {
    dispatch({ type: "ADD_WATCHLIST_ITEM", payload: newExpense });
  };

  const removeWatchlistItem = (id: number) => {
    dispatch({ type: "REMOVE_WATCHLIST_ITEM", payload: id });
  };

  const value: DataContextValue = {
    data,
    setExpenses,
    addExpense,
    removeExpense,
    setWatchlist,
    addWatchlistItem,
    removeWatchlistItem,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
