import axios from "axios";
import { BASE_URL, getRequestHeader, normalizeAxiosError } from "./config"
import type { User } from "@/context/types"

const ENDPOINT = `${BASE_URL}/users`;

export async function getUserSettings(): Promise<User> {
  try {
    const { data } = await axios.get(ENDPOINT, await getRequestHeader());
    console.log(data);
    return data;
  } catch(err) {
    console.log(err);
    throw normalizeAxiosError(err);
  }
}

export async function editUserSettings(body: Partial<User>): Promise<User> {
  try {
    const { data } = await axios.put(ENDPOINT, body, await getRequestHeader());
    console.log(data);
    return data;
  } catch(err) {
    throw normalizeAxiosError(err);
  }
}

export async function deleteUserSettings(): Promise<User> {
  const { data } = await axios.delete(ENDPOINT, await getRequestHeader());
  return data;
}


