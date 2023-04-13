import { useState } from "react";
import { Dialog } from "primereact/dialog";

function FoodCard({ nombre, precio, ingredientes }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className="text-center border rounded-md py-3 px-2 cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
          alt=""
        />
        <h1 className="text-2xl">{nombre}</h1>
        <h2 className="text-lg">${precio} mxm</h2>
      </div>
      {ingredientes ? (
        <Dialog
          header={nombre}
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          <div className="grid grid-flow-col">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
              alt=""
            />
            <section>
              <h3 className="text-xl mb-3">${precio} mxm</h3>
              <h3 className="text-lg">Incluye:</h3>
              <ul className="list-disc grid gap-1">
                {ingredientes.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </section>
          </div>
        </Dialog>
      ) : null}
    </>
  );
}

export default FoodCard;
