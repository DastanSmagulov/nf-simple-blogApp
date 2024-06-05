"use client";

import Link from "next/link";

const Header = () => {
  return (
    <footer className="flex items-center min-h-[5vh] justify-center p-6 bg-black text-neutral-content border-b-2 border-solid border-white">
      <Link href="/">
        <h1 className="text-2xl hover:text-white">My blog</h1>
      </Link>
    </footer>
  );
};

export default Header;
