import { Container } from "postcss";
import { useState, useEffect } from "react";
import styles from "@/styles/Categorias.module.css";
import Link from "next/link";
import SideBarMenu from "@/components/SideBarMenu";
const API = "http://localhost:3000/api/catalogo/";

function index() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
        console.log(data);
      });
  }, []);

  if (isLoading) return <h1 className="w-4/5 mx-auto">Is Loading...</h1>;
  if (!data?.length) return <h1 className="w-4/5 mx-auto">No data...</h1>;

  return (
    <div className="grid grid-flow-col-dense grid-cols-6 gap-5 overflow-auto">
      <SideBarMenu />
      <main className="col-span-5 px-20 mx-auto grid gap-3 mb-10 overflow-y-auto">
        {data.map(({ categoria, lista }) => (
          <section key={categoria}>
            <h1 className="text-3xl border-b-2 mb-3 p-1">{categoria}</h1>
            <div className="grid grid-cols-4 gap-3">
              {lista.map(({ nombre, precio }) => (
                <div className="text-center border py-3 px-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
                    alt=""
                  />
                  <h1 className="text-2xl">{nombre}</h1>
                  <h2 className="text-lg">${precio} mxm</h2>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default index;
