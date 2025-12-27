import axios from "axios";
import { BASE_URL, getRequestHeader } from "./config"
import type { NewWatchlistItem, WatchlistItem } from "@/context/types";

const ENDPOINT = `${BASE_URL}/watchlist`;

export async function getUserWatchlist(): Promise<WatchlistItem[]> {
  const { data } = await axios.get(ENDPOINT, await getRequestHeader());
  return data; 
}

export async function getWatchlistItemById(id: number): Promise<WatchlistItem> {
  const { data } = await axios.get(`${ENDPOINT}/${id}`, await getRequestHeader());
  return data; 
}

export async function createWatchlistItem(body: NewWatchlistItem): Promise<WatchlistItem> {
  const { data } = await axios.post(`${ENDPOINT}`, body, await getRequestHeader());
  return data; 
}

export async function editWatchlistItemById(id: number, body: NewWatchlistItem): Promise<WatchlistItem> {
  const { data } = await axios.put(`${ENDPOINT}/${id}`, body, await getRequestHeader());
  return data; 
}

export async function deleteWatchlistItemById(id: number): Promise<WatchlistItem> {
  const { data } = await axios.delete(`${ENDPOINT}/${id}`, await getRequestHeader());
  return data; 
}
