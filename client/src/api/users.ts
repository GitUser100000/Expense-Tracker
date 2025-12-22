import axios from "axios";
import { BASE_URL, getRequestHeader } from "./config"
import type { User } from "@/models/models";

const ENDPOINT = `${BASE_URL}/users`;

export async function getUserSettings(): Promise<User> {
  const { data } = await axios.get(ENDPOINT, await getRequestHeader());
  return data;
}

export async function editUserSettings(body: User): Promise<User> {
  const { data } = await axios.put(ENDPOINT, body, await getRequestHeader());
  return data;
}

export async function deleteUserSettings(): Promise<User> {
  const { data } = await axios.delete(ENDPOINT, await getRequestHeader());
  return data;
}

