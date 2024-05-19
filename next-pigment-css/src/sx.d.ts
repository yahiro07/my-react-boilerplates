import type { sx } from "@pigment-css/react";

declare global {
  namespace React {
    interface DOMAttributes<T> {
      sx?: Parameters<typeof sx>[0];
    }
  }
}
