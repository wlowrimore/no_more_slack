import React from "react";
import "./css/header.css";
import NavLinksComp from "./NavLinks";

const Header = () => {
  return (
    <header className="w-[46.5rem]">
      <main className="py-2 border-b border-neutral-400 w-[46.5rem]">
        <section className="grid grid-cols-2">
          <div className="relative">
            <h1 className="text-7xl text-neutral-200 ">
              NOM<span className="text-sky-700">O</span>RE
              <span className="text-red-800">SLACK</span>
            </h1>
          </div>
          <span className="absolute left-[37.5rem] top-[2.7rem] dot-separator"></span>
          <div className="py-[0.37rem] leading-7.5 flex flex-col items-end">
            <h2 className="text-[1.8rem] text-nueutral-200">
              IT&apos;S&nbsp;Time
            </h2>
            <span className="text-sky-700 text-[2rem] p-0 -ml-2">
              &nbsp;We&nbsp;<span className="text-neutral-200">ACT</span>
            </span>
          </div>
        </section>
      </main>
      <section className="">
        <NavLinksComp />
      </section>
    </header>
  );
};

export default Header;
