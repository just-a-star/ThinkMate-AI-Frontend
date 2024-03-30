import useSWR from "swr";
import { Quiz } from "../types/quiz";

export function useQuiz() {
  return useSWR<Quiz>("/quiz");
}
