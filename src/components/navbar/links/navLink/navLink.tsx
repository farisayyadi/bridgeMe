"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

interface NavItem {
  title: string;
  path: string;
}

interface NavLinkProps {
  item: NavItem;
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path ? styles.active : ""
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
