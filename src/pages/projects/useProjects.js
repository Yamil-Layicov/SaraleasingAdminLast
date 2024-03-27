
import { useQuery } from "@tanstack/react-query";
import api from '../../api/posts';

export function useProjects() {
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => api.get("projects"),
  });

  return { isLoading, error, projects };
}

