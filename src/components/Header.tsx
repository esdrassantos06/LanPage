"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-header shadow-2xl rounded-lg flex items-center justify-between mx-auto w-[80%] h-20 text-white p-4 mt-4">
      <div className="flex items-center">
        <Link href={'/'} className="text-xl select-none cursor-pointer mr-8 font-bold">LanPage</Link>
        <nav>
          <ul className="hidden sm:flex gap-8 text-[15px]">
            <li className="cursor-pointer hover:text-zinc-300 duration-300 transition-all"><a href="#">About Us</a></li>
            <li className="cursor-pointer hover:text-zinc-300 duration-300 transition-all"><a href="#">Solutions</a></li>
            <li className="cursor-pointer hover:text-zinc-300 duration-300 transition-all"><a href="#">Pricing</a></li>
            <li className="cursor-pointer hover:text-zinc-300 duration-300 transition-all"><a href="#">Resources</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex select-none gap-4">
        <button className="cursor-pointer px-4 py-2 rounded-md border-transparent border transition-all duration-300 hover:border-Purple ">Log in</button>
        <button className="cursor-pointer px-4 py-2 rounded-md bg-Purple hover:bg-newPurple transition-colors duration-300">Join Now</button>
      </div>
    </header>
  );
}
