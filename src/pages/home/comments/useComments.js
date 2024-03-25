import api from '../../../api/posts';
import { useQuery } from "@tanstack/react-query";

export function useComments() {
  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => api.get("comments"),
  });

  return { isLoading, error, comments };
}

