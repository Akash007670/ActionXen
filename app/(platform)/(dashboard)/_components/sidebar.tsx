"use client";

import React from "react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts"; //localstorage hook
import { Plus } from "lucide-react";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
//Importing components.
import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import NavItem, { Organization } from "./navItem";

interface ISidebarProps {
  storageKey?: string; // This storageKey means that we'll keep track of sidebar opening/closing from the localstorage
}

const Sidebar = (props: ISidebarProps) => {
  const { storageKey = "t-sidebar-state" } = props;
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  //Here down below you can use alias because both the function provides isLoaded method so we named something meaningfull to both of them
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true, //this is used to paginate
    },
  });

  //this will turn into array
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !expanded[id], //here we are toggling the state.
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      {/* Accordion component */}
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue} //The reason to create defaultAccordion value is because the defaultValue accepts only string[] | undefined
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
