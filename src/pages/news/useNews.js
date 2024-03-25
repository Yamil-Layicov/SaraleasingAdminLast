
import { useQuery } from "@tanstack/react-query";
import api from '../../api/posts';

export function useNews() {
  const {
    isLoading,
    data: news,
    error,
  } = useQuery({
    queryKey: ["news"],
    queryFn: () => api.get("news"),
  });

  return { isLoading, error, news };
}

