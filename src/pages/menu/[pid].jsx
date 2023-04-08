import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FoodCard from "@/components/FoodCard";
import SideBarMenu from "@/components/SideBarMenu";

const API = "http://localhost:3000/api/catalogo/";

function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API}${pid}`)
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, [pid]);

  if (isLoading) return <h1 className="w-4/5 mx-auto">Is Loading...</h1>;
  if (!data?.lista) return <h1 className="w-4/5 mx-auto">No data...</h1>;

  return (
    <div className="grid grid-cols-5 overflow-auto">
      <SideBarMenu />
      <section className="col-span-4 grid grid-flow-row-dense overflow-auto">
        <h1 className="text-8xl text-center mx-auto my-5 uppercase font-extrabold">
          {data.categoria}
        </h1>
        <div className="grid grid-cols-4 mx-10 mb-10 gap-5">
          {data.lista.map(({ nombre, precio, ingredientes }) => (
            <FoodCard
              key={nombre}
              ingredientes={ingredientes}
              nombre={nombre}
              precio={precio}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
