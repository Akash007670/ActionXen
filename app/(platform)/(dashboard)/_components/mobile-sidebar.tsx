"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile.sidebar";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false); //Using this state to solve hydration error cause by server-side rendering

  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  //will run only on first iteration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  //This useEffect will make sure to close the mobile sidebar if pathname changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button className="block md:hidden mr-2" variant="ghost" size="sm">
        <MenuIcon className="h-4 w-4" onClick={onOpen} />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
};