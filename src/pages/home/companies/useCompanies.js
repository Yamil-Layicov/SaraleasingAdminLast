import api from '../../../api/posts';
import { useQuery } from "@tanstack/react-query";

export function useCompanies() {
  const {
    isLoading,
    data: companies,
    error,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: () => api.get("companies?all=true"),
  });

  return { isLoading, error, companies };
}

