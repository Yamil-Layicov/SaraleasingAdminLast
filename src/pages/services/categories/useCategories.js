
import { useQuery } from "@tanstack/react-query";
import api from '../../../api/posts';

export function useCategories() {
  const {
    isLoading,
    data: catalogCategories,
    error,
  } = useQuery({
    queryKey: ["catalogCategories"],
    queryFn: () => api.get("catalog-categories"),
  });

  return { isLoading, error, catalogCategories };
}

