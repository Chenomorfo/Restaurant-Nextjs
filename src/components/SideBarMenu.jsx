import { useState, useEffect } from "react";
import styles from "@/styles/Categorias.module.css";
import Link from "next/link";

const API = "http://localhost:3000/api/catalogo/";

function SideBarMenu() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  if (isLoading) return <h1>Waiting SideBar...</h1>;
  if (!data) return <h1>No SideBar...</h1>;

  return (
    <nav>
      <h1 className="text-4xl p-3">¿Algo en especifico?</h1>
      <ul className={styles.NavBar}>
        {data.map(({ categoria }, i) => (
          <Link
            href={{
              pathname: "/menu/[pid]",
              query: { pid: i },
            }}
          >
            <li className="text-3xl">
              <span>{categoria}</span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default SideBarMenu;
