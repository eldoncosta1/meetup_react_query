import { useQuery } from "react-query";
import { api } from "../services/api";

export function useUsers() {
  return useQuery(
    "users",
    async () => {
      const { data } = await api.get("users");

      return data;
    },
    {
      staleTime: 1000 * 5,
    }
  );
}
