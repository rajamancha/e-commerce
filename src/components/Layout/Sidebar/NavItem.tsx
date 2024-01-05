"use client"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  link: string;
  title: string;
  isLast: boolean;
}

export default function NavItem({ link, title , isLast }: NavItemProps) {
  const pathname = usePathname()
  
  return (
    <li>
      {!isLast &&  <Separator />}
      <Link href={link} className={`block p-3 w-[100%] ${pathname === link && "bg-primary text-primary-foreground"}`}>
        {title}
      </Link>
      <Separator />
    </li>
  );
}
