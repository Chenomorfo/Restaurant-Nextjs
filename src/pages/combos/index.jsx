import React from "react";

const API = "http://localhost:3000/api/combos";

export async function getServerSideProps() {
  const res = await fetch(API);
  const data = await res.json();
  return { props: { data } };
}

function index({ data }) {
  return (
    <div className="overflow-auto">
      <h1 className="text-center text-6xl pt-10">Nuestros Combos</h1>
      <div className="grid grid-cols-3 gap-4 w-3/4 py-10 mx-auto">
        {data.map(({ nombre, precio, lista }) => (
          <div className="grid grid-flow-row border p-4 rounded-md">
            <h1 className="text-3xl text-center">
              {nombre} <br /> ${precio}
            </h1>
            <img
              className="w-5/6 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
              alt=""
            />
            <h3 className="text-xl mt-2">Contenido:</h3>
            <ul className="grid grid-flow-row list-disc mx-5">
              {lista.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
