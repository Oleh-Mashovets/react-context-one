import React from "react";
import "../index.css";
import { ProviderContext } from "./providerContext";
import { Full } from "./transit";

export const App = () => {
  return (
    <>
    <ProviderContext>
      <Full/>
    </ProviderContext>
    </>
  );
};
