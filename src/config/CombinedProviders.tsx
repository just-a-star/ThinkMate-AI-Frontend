"use client";
// src/components/CombinedProviders.jsx or CombinedProviders.tsx
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import Providers from "./Providers";
import { PersistGate } from "redux-persist/integration/react";

type CombinedProvidersProps = {
  children: ReactNode;
};

const CombinedProviders: React.FC<CombinedProvidersProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Providers>{children}</Providers>
      </PersistGate>
    </Provider>
  );
};

export default CombinedProviders;
