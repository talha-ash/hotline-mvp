"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { SessionProvider } from "next-auth/react";

import SetTokenComponent from "./setTokenComponent";
// import { RefreshTokenHandler } from "../components/refreshTokenHandler";

export default function RootClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <SessionProvider
      refetchInterval={5 * 60}
      // Re-fetches session when window is focused
      refetchOnWindowFocus={true}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <RefreshTokenHandler setInterval={setInterval} /> */}
        <ReactQueryDevtools initialIsOpen={false} />
        <SetTokenComponent />
      </QueryClientProvider>
    </SessionProvider>
  );
}
