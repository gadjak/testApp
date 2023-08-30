import { Exercise } from "@/types";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchExercises = async (params: string): Promise<Exercise[]> => {
  try {
    const response = await axios.get(`${API_URL}/exercises?${params}`, {
        headers: {
          "X-Api-Key": API_KEY
        }
      });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
