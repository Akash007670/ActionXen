import React, { ReactNode } from "react";
import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    // max-w-12xl 2xl:max-w-screen-xl
    <main className="pt-20 md:pt-24 px-4 mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
