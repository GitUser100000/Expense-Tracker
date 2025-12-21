import { retrieveAccessToken } from "@/services/auth.service";

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
    throw new Error("Something fucked up...")
  } 
}

export const BASE_URL = import.meta.env.VITE_API_BASE_URL; 