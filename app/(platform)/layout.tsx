import { ClerkProvider } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const PlatformLayout = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider afterSignOutUrl="/">{children}</ClerkProvider>;
};

export default PlatformLayout;
