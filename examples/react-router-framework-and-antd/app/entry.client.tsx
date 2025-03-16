import { createCache, StyleProvider } from "@ant-design/cssinjs";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// used  to ensure proper hydration and consistent styling between server and client for Ant Design components
const cache = createCache();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StyleProvider cache={cache}>
        <HydratedRouter />
      </StyleProvider>
    </StrictMode>
  );
});
