import { Heart, Home } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
        <div className="flex flex-col gap-20 sticky top-10 left-0">
            <div className="w-full">
                <img src="/logo.svg" alt="logo" className="hidden md:block"/>
                <img src="/mobile-logo.svg" alt="logo" className="md:hidden block"/>
            </div>
            <ul className="flex flex-col items-center md:items-start gap-8">
                <Link to={"/"} className="flex gap-1">
                    <Home/>
                    <span className="font-bold hidden md:block translate-y-[3px]">Home</span>
                </Link>

                <Link to={"/favorite"} className="flex gap-1">
                    <Heart size={"24"}/>
                    <span className="font-bold hidden md:block translate-y-[3px]">Favorites</span>
                </Link>
            </ul>
        </div>
    </div>
  );
};


const MobileSidebar = () => {
    return (
        <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 px-2 py-4  sm:hidden ">
            <Link to={"/"}>
                <Home size={"24"} className="cursor-pointer"/>
            </Link>
            <Link to={"/favorite"}>
                <Heart size={"24"} className="cursor-pointer"/>
            </Link>
        </div>
    )
}