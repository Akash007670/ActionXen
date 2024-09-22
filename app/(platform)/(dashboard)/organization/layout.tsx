import React, { ReactNode } from "react";
import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 px-4 mx-auto border border-blue-500">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block border border-red-500">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
