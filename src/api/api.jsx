import { getURL } from "@/helper/Helper";
import axios from "axios"

export const getDataLecturerGathering2024 = async () => {
    return await axios.get(`${getURL()}/api/undangan`);
}

export const postDataLecturerGathering2024 = async (data, custom) => {
    return await axios.post(`${getURL()}/api/undangan`, data, custom);
}