"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  link: string;
  title: string;
}

export default function NavItem({ link, title }: NavItemProps) {
  const pathname = usePathname()
  console.log({pathname});
  
  return (
    <li>
      <Link href={link} className={`block p-3 border-b-[1px] w-[100%] ${pathname === link ? "bg-primary text-primary-foreground" : ""}`}>
        {title}
      </Link>
    </li>
  );
}
