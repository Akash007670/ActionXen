import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:op transition items-center gap-x-2 hidden md:flex">
        <Image src="/next.svg" alt="logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1">ActionXen</p>
      </div>
    </Link>
  );
};

export default Logo;
