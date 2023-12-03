"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/amplifidor.webp";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <nav className="flex container justify-between px-6 py-3 mt-6 z-50">
      <Link href={"/"}>
        <Image src={logo} width={130} alt={"amplifidor logo"}></Image>
      </Link>
      <ul
        className={`${
          displayMenu ? "flex " : "hidden"
        } md:flex md:relative absolute right-0 top-14 md:top-0 flex-col md:flex-row text-right bg-gray-900 md:bg-transparent p-6 md:p-0 rounded-md gap-4 md:gap-10`}
      >
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/podcast"}>Podcast</Link>
        </li>
      </ul>
      <div className="md:hidden flex" onClick={toggleMenu}>
        <IoIosMenu size={24} />
      </div>
    </nav>
  );
}
