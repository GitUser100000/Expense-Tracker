import axios from "axios";
import { BASE_URL, getRequestHeader } from "./config"
import type { User } from "@/models/models";

const ENDPOINT = `${BASE_URL}/users`;

export const getUserSettings = async() => axios.get(ENDPOINT, await getRequestHeader());

export const editUserSettings = async(body: User) => axios.put(ENDPOINT, body, await getRequestHeader());

export const deleteUserSettings = async() => axios.delete(ENDPOINT, await getRequestHeader());