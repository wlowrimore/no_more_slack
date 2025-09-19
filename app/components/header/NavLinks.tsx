import React from "react";
import "./css/header.css";

const NavLinksComp = () => {
  return (
    <main className="flex border border-neutral-400/30 rounded xl:w-[46.5rem] justify-center">
      <section className="flex"></section>
      <nav className="flex justify-center items-center">
        <ul className="flex text-lg text-slate-400 px-4">
          <li className="w-[7rem] flex justify-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            Home
          </li>
          <li className="w-[7rem] flex justify-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            Mission
          </li>
          <li className="w-[7rem] flex justify-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            Topics
          </li>
          <li className="w-[7rem] flex justify-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            SI/SO
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavLinksComp;
