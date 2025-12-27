import axios from "axios";
import { BASE_URL, getRequestHeader, normalizeAxiosError } from "./config"
import type { Cadence, DateCadence, Expense, NewExpense } from "@/context/types";
import { getEndDate } from "@/helpers/dateHelper";

const ENDPOINT = `${BASE_URL}/expenses`;

export async function getUserExpenses(): Promise<Expense[]> {
  try {
    const { data } = await axios.get(ENDPOINT, await getRequestHeader());
    return data; 
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err); 
  }
}

export async function getUserExpensesSum(startDate: Date, cadence: DateCadence): Promise<number> {
  try {
    const endDate = getEndDate(cadence, startDate);
    const { data } = await axios.get(
      `${ENDPOINT}/total?start=${startDate.toISOString()}&end=${endDate?.toISOString()}`, 
      await getRequestHeader()
    );
    return data.total ?? 0;
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err);
  }
}

export async function getExpenseById(id: number): Promise<Expense> {
  try {
    const { data } = await axios.get(`${ENDPOINT}/${id}`, await getRequestHeader());
    return data;
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err); 
  }
}

export async function createExpense(body: NewExpense): Promise<Expense> {
  try {
    const { data } = await axios.post(`${ENDPOINT}`, body, await getRequestHeader());
    return data;
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err);
  }
}

export async function editExpenseById(id: number, body: Partial<Expense>): Promise<Expense> {
  try {
    const { data } = await axios.put(`${ENDPOINT}/${id}`, body, await getRequestHeader());
    return data;
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err);
  }
}

export async function deleteExpenseById(id: number): Promise<Expense> {
  try {
    const { data } = await axios.delete(`${ENDPOINT}/${id}`, await getRequestHeader());
    return data; 
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err); 
  }
}
