import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsMenuButton } from "react-icons/bs";
import { GiCarKey } from "react-icons/gi";
const Navbar = ({ link }) => {
  const { data: session } = useSession();

 
  return (
    <div>

      {/* Large screen navbar */}
      <nav className="hidden lg:flex bg-gray-900 fixed top-0 z-[50] w-full">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-[8px]">
            <Image className="bg-white rounded-full" src="https://cdn.discordapp.com/attachments/839784544798638090/1116281663857631233/gurex__logo_transparent.png" height={50} width={50} />
              <Link href={`${link}`} className="text-yellow-400 font-bold text-2xl cursor-pointer">
                Gurex
              </Link>

            </div>


          {/* Search bar */}
            <div className="flex items-center space-x-[8px]">
              <input  placeholder="Search for anything you need" className="p-2 px-5 h-full width-6 flex-grow rounded flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <AiOutlineSearch className="h-12 p-4 text-white"/>
            </div>
            <div className="flex">
              <a
                to="/"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                to="/cars"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cars
              </a>
              <a
                to="/about"
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>

              {
                !session && (
            <Link href="/api/auth/signin">
              <p
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </p>
              </Link>
                )
              }
              
            
              {
                session && (
            <Link href="/api/auth/signin">
              <p
                onClick={() => signOut()}
                className="text-gray-300 hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </p>
              </Link>
                )
              }

            {session && (
              <Link href="/dashboard">
                  <img className="h-[32px] w-[32px] rounded-full ml-[5px]" src={session?.user.image} />

              </Link>
            )}
            
            </div>
          </div>
        </div>
      </nav>

            {/* Small screen Navbar */}
      <nav className="flex items-center justify-between lg:hidden bg-black py-[16px] px-[5px] fixed z-[50] w-[100%]">
            <Image className="bg-white rounded-full" src="https://cdn.discordapp.com/attachments/839784544798638090/1116281663857631233/gurex__logo_transparent.png" height={50} width={50} />
              <AiOutlineMenu className="text-gray-200 text-[50px]"/>
      </nav>
    </div>
    
  );
};

export default Navbar;
