import axios from "axios";
import { BASE_URL, getRequestHeader } from "./config"
import type { Expesne } from "@/models/models";

const ENDPOINT = `${BASE_URL}/expenses`;

export const getUserExpenses = async() => axios.get(ENDPOINT, await getRequestHeader());

export const getExpenseById = async(id: number) => axios.put(`${ENDPOINT}/${id}`, await getRequestHeader());

export const createExpense = async(body: Expesne) => axios.post(`${ENDPOINT}`, body, await getRequestHeader());

export const editExpenseById = async(id: number, body: Expesne) => axios.put(`${ENDPOINT}/${id}`, body, await getRequestHeader());

export const deleteExpenseById = async(id: number) => axios.delete(`${ENDPOINT}/${id}`, await getRequestHeader());