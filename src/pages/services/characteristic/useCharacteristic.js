// useProducts.js
import { useQuery } from "@tanstack/react-query";
import api from '../../../api/posts';

export function useCharacteristic() {
  const {
    isLoading,
    data: catalogFeatures,
    error,
  } = useQuery({  
    queryKey: ["catalogFeatures"],
    queryFn: () => api.get(`catalog-features`),
  });

  return { isLoading, error, catalogFeatures };
}
