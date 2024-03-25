import api from '../../api/posts';
import { useQuery } from "@tanstack/react-query";

export function useVacancies() {
  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies"],
    queryFn: () => api.get("vacancies"),
  });

  return { isLoading, error, vacancies };
}

