"use client";
// src/components/CombinedProviders.jsx or CombinedProviders.tsx
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Providers from "./Providers";

type CombinedProvidersProps = {
  children: ReactNode;
};

const CombinedProviders: React.FC<CombinedProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <Providers>{children}</Providers>
    </Provider>
  );
};

export default CombinedProviders;
