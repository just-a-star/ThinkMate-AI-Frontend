"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "../app/services/fetcher";

export default function Providers({ children }: { children: ReactNode }) {
  return <SWRConfig value={{ fetcher, refreshInterval: 1000, revalidateOnReconnect: false }}> {children}</SWRConfig>;
}
