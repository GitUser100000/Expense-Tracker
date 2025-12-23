import { retrieveAccessToken } from "@/services/auth.service";
import axios from "axios";

export async function getRequestHeader() {
  try {
    const token = await retrieveAccessToken();
    if (!token) throw new Error("No access Toekn Available");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return header;
  } catch (err) {
    throw err; 
  } 
}

export const BASE_URL = import.meta.env.VITE_API_BASE_URL; 

export function normalizeAxiosError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    const message =
      err.response?.data?.error ||
      err.response?.data?.message ||
      "Request failed";

    throw new Error(message);
  }

  throw err;
}