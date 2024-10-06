import React, { ReactNode } from "react";
import OrganizationControl from "./_components/orgControl";

const OrganizationIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <OrganizationControl />
      {children}
    </div>
  );
};

export default OrganizationIdLayout;
