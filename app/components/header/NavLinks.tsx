import React from "react";
import "./css/header.css";
import {
  AiFillHome,
  AiFillDashboard,
  AiFillCheckCircle,
  AiFillSketchCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import Link from "next/link";

const NavLinksComp = () => {
  return (
    <main className="flex border-b border-neutral-400/30 xl:w-[46.5rem] justify-center">
      <nav className="flex justify-center items-center">
        <ul className="flex text-lg text-slate-400 px-4 py-1">
          <Link href="/">
            <li className="w-[7rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
              <AiFillHome size={24} />
              <span className="text-xs tracking-wider ml-1 mt-3 h-full flex items-end">
                Home
              </span>
            </li>
          </Link>
          <Link href="/mission-statement">
            <li className="w-[9rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
              <AiFillSketchCircle size={24} />
              <span className="text-xs tracking-wider ml-1 mt-3 flex items-end">
                Mission
              </span>
            </li>
          </Link>
          <li className="w-[10rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            <AiFillDashboard size={24} />
            <span className="text-xs tracking-wider ml-1 h-full flex items-end">
              Dashboard
            </span>
          </li>
          <li className="w-[7rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            <AiFillCheckCircle size={24} />
            <span className="text-xs tracking-wider ml-1 h-full flex items-end">
              Facts
            </span>
          </li>
          <li className="w-[7rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            <AiOutlineLogin size={24} />
            <span className="text-xs tracking-wider ml-1 h-full flex items-end">
              Signin
            </span>
          </li>
          {/* <li className="w-[7rem] flex justify-center items-center mx-3 px-6 cursor-pointer transitioon-transform hover:text-slate-600 hover:bg-neutral-800/50 duration-200 ease-in-out rounded-full">
            <AiOutlineLogout size={24} />
            <span className="text-xs tracking-wider ml-1 h-full flex items-end">
              Signout
            </span>
          </li> */}{" "}
          {/* WILL BE CONDITIONAL */}
        </ul>
      </nav>
    </main>
  );
};

export default NavLinksComp;
