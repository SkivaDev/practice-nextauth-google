"use client";

import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  console.log(status);
  console.log(session);

  return (
    <header className="flex justify-between items-center h-[3.75rem] bg-indigo-900 px-[100px] text-white">
      <Link href={"/"}>
        <h1>NextGoogle</h1>
      </Link>
      <nav className="flex items-center gap-6">
        {session?.user ? (
          <>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <p>{session.user.name} {session.user.email}</p>
            <img src={session.user.image} alt="user logo" className="w-10 h-10 rounded-full"/>
            <button
            className="p-[5px] bg-red-500 rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </button>
          </>
        ) : (
          <button
            className="p-[5px] bg-blue-500 rounded-md"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
