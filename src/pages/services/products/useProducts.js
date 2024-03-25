// import { useQuery } from "@tanstack/react-query";
// import api from '../../../api/posts';


// export function useProducts(page) {
//   const {
//     isLoading,
//     data: catalogs,
//     error,
//   } = useQuery({  
//     queryKey: ["catalogs", { page }],
//     queryFn: () => api.get(`catalogs?get=${page}`),
//   });

//   return { isLoading, error, catalogs };
// }

import { useQuery } from "@tanstack/react-query";
import api from '../../../api/posts';


export function useProducts() {
  const {
    isLoading,
    data: catalogs,
    error,
  } = useQuery({  
    queryKey: ["catalogs"],
    queryFn: () => api.get(`catalogs?get=all`),
  });

  return { isLoading, error, catalogs };
}
