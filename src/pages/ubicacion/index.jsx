import React from "react";

const API = "http://localhost:3000/api/ubicacion/";

export async function getServerSideProps() {
  const res = await fetch(API);
  const data = await res.json();
  return { props: { data } };
}

function index({ data }) {
  return (
    <main className="overflow-auto">
      <section className="grid grid-cols-1 gap-5 w-2/3 mx-auto p-5">
        {data.map((ubicacion) => (
          <article className="grid grid-cols-2 border rounded-md gap-2 p-3">
            <img className="object-cover m-auto" src={ubicacion.foto} alt="" />
            <div className="grid grid-flow-row gap-5">
              <h1 className="text-4xl text-center">{ubicacion.sucursal}</h1>
              <h2 className="text-xl text-center">{ubicacion.direccion}</h2>
              <div className="grid grid-flow-col gap-2 justify-around">
                <h3 className="text-xl text-center border p-2">
                  Telefono: <br /> {ubicacion.telefono}
                </h3>
                <h3 className="text-xl text-center border p-2">
                  Horario: <br /> {ubicacion.horario}
                </h3>
              </div>
              <h3 className="text-3xl text-center">
                Contamos con:
                <ul className="grid gap-1">
                  {ubicacion.servicios.map((servicio) => (
                    <li className="text-xl">{servicio}</li>
                  ))}
                </ul>
              </h3>
              <a href={ubicacion.maps} target="_blank">
                <h2 className="text-center text-2xl mt-5 underline">
                  ¡Aqui estamos!
                </h2>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default index;
