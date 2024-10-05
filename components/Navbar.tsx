import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 items-center justify-between h-16">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/webmeet-logo.svg"
          width={220} // Adjust the width to fit better
          height={100} // Adjust height as per your needs
          className="object-contain max-sm:size-30 max-sm:px-0 max-sm:ml-0"
          alt="WebMeet Logo"
          priority
        />
        <p className="text-[26px] text-white max-sm:hidden italic font mx-[-60px]">
          WebMeet
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk User Management  */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
 