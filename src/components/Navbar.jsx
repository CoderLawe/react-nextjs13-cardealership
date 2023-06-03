import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiCarKey } from "react-icons/gi";
const Navbar = () => {
  const { data: session } = useSession()

 
  return (
    <nav className="bg-gray-900 fixed top-0 z-[50] w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-[8px]">
              <GiCarKey className="text-[#F75D34] text-[32px]" />
            <Link href="/" className="text-white font-bold text-2xl cursor-pointer">
              SosahMotors
            </Link>

          </div>


        {/* Search bar */}
          <div className="flex items-center space-x-[8px]">
            <input className="w-[200px] px-2 bg-gray-100 text-black font-serif rounded-[4px]" placeholder="Search for your dream car!"/>
            <AiOutlineSearch className="text-white" />
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
  );
};

export default Navbar;
