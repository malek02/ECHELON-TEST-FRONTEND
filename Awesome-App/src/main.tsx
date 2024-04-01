import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/router.component";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";


export const queryClient = new QueryClient({
       defaultOptions: {
         queries: {
           refetchInterval: 600000, // refetch data every 10 minutes
           refetchOnWindowFocus: false,
           staleTime: 10000, //after 10 seconds, the data is considered stale
           retry: 1, // retry once in case of fail
         },
       },
     });
     
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);
