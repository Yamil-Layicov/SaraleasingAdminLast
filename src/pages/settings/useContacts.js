
import { useQuery } from "@tanstack/react-query";
import api from '../../api/posts';

export function useContacts() {
  const {
    isLoading,
    data: contacts,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => api.get(`contacts`),
  });

  return { isLoading, error, contacts };
}

