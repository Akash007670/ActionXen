"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

const OrganizationControl = () => {
  const params = useParams(); // will get the organization from the url and if someone try to change it we'll change the org also.

  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({ organization: params.organizationId as string }); // making the params.organizationId as string.
  }, [setActive, params.organizationId]); //Also the organizationId should be spelled correctly and match with folder name.

  return <div>OrganizationControl</div>;
};

export default OrganizationControl;
