import axios from "axios";
import { BASE_URL, getRequestHeader } from "./config"
import type { Expense } from "@/context/types";

const ENDPOINT = `${BASE_URL}/expenses`;

export async function getUserExpenses(): Promise<Expense> {
  const { data } = await axios.get(ENDPOINT, await getRequestHeader());
  return data; 
}

export async function getExpenseById(id: number): Promise<Expense> {
  const { data } = await axios.get(`${ENDPOINT}/${id}`, await getRequestHeader());
  return data; 
}

export async function createExpense(body: Expense): Promise<Expense> {
  const { data } = await axios.post(`${ENDPOINT}`, body, await getRequestHeader());
  return data; 
}

export async function editExpenseById(id: number, body: Expense): Promise<Expense> {
  const { data } = await axios.put(`${ENDPOINT}/${id}`, body, await getRequestHeader());
  return data; 
}

export async function deleteExpenseById(id: number): Promise<Expense> {
  const { data } = await axios.delete(`${ENDPOINT}/${id}`, await getRequestHeader());
  return data; 
}
