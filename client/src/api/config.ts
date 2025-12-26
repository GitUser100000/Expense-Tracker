import { retrieveAccessToken } from "@/services/auth.service";
import axios from "axios";

export async function getRequestHeader() {
  try {
    const token = await retrieveAccessToken();
    if (!token) throw new Error("No access token Available");
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

// export function normalizeAxiosError(err: unknown): never {
//   if (axios.isAxiosError(err)) {
//     const message =
//       err.response?.data?.error ||
//       err.response?.data?.message ||
//       "Request failed";

//     throw new Error(message);
//   }

//   throw err;
// }

export function normalizeAxiosError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    console.error("STATUS:", err.response?.status)
    console.error("DATA:", err.response?.data)
    console.error("HEADERS:", err.response?.headers)

    throw new Error(
      err.response?.data?.error ??
      err.response?.data?.message ??
      "Request failed"
    )
  }

  throw err
}