import { Button } from "@/components/ui/button";
import { ArrowRight, Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center border shadow-sm p-3 mb-4 rounded-full uppercase bg-blue-100 text-blue-700">
          <Medal className="h-6 w-6 mr-2" />
          Best Task Management
        </div>
        <h1 className="text-3xl font-medium md:text-6xl text-center text-neutral-800 mb-6">
          Where Action meets
        </h1>
        <div className="flex items-center text-center justify-center text-xl md:text-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 p-2 rounded-md pb-2.5 w-fit">
          Xen and Balance
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manange projects, enhance your productivity and acheive
        your goals. From work to home make every task effortless and accomplish
        it all with ActionXen.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get ActionXen <ArrowRight className="ml-2" size={16} />
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
