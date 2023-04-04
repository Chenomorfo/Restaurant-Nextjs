import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API = "http://localhost:3000/api/categories/";

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
        console.log(data);
        setIsLoading(false);
        setData(data);
      });
  }, []);

  if (isLoading)
    return <h1 style={{ width: "80%", margin: "auto" }}>Is Loading...</h1>;
  if (!data?.lista)
    return <h1 style={{ width: "80%", margin: "auto" }}>No data...</h1>;

  return (
    <div style={{ display: "grid", gap: "15px", width: "80%", margin: "auto" }}>
      <h1>Categoria: {data.categoria}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px",
        }}
      >
        {data.lista.map(({ nombre, precio }) => (
          <div style={{ textAlign: "center", border: "1px solid white" }}>
            <h1>{nombre}</h1>
            <h2>{precio}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
