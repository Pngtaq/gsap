import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/home" className="flex items-center gap-2">
        <Image src="/images/logo.png" width={50} height={50} alt="logo" />
        <p>Velvet pour</p>
      </Link>

      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={`/${link.id}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
