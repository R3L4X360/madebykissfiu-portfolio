"use client";

import { cn } from "@/lib/utils";
import { NavItemType } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ name, link, icon }: NavItemType) => {
  const currentLink = usePathname();

  return (
    <li>
      <Link
        href={link}
        className={cn(
          "h-full p-2 rounded",
          currentLink == link && "border border-secondary rounded"
        )}
      >
        {icon} {name}
      </Link>
    </li>
  );
};

export default NavItem;
