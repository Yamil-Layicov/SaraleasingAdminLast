
import { useQuery } from "@tanstack/react-query";
import api from '../../api/posts';

export function useSocials() {
  const {
    isLoading,
    data: socials,
    error,
  } = useQuery({
    queryKey: ["socials"],
    queryFn: () => api.get("socials"),
  });

  return { isLoading, error, socials };
}

