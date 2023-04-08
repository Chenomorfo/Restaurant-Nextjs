import React from "react";
import Image from "next/image";
import Styles from "@/styles/Navbar.module.css";
import Link from "next/link";
function NavBar() {
  const links = [
    { name: "Menu", path: "/menu" },
    { name: "Combos", path: "/combos" },
    { name: "Promociones", path: "/promos" },
    { name: "Conocenos", path: "/conocenos" },
  ];

  return (
    <nav className={Styles.NavBar}>
      <Link href={"/"}>
        <Image src={"/SnackNChill.jpg"} width={275} height={175} />
      </Link>
      <ul>
        {links.map(({ name, path }) => (
          <li key={path}>
            <Link href={path}> {name} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
