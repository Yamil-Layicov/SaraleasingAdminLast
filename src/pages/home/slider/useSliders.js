
import { useQuery } from "@tanstack/react-query";
import api from '../../../api/posts';

export function useSliders() {
  const {
    isLoading,
    data: sliders,
    error,
  } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => api.get("sliders"),
  });

  return { isLoading, error, sliders };
}

