class Comida {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const Menu = [
  {
    categoria: "Hamburguesas",
    lista: [
      new Comida("Bacon & Cheese Burger", 89.99),
      new Comida("Jalapeño Burger", 69.99),
      new Comida("Guacamole Burger", 109.99),
      new Comida("Triple Cheese Burger", 129.99),
      new Comida("BBQ Big Burger", 89.99),
    ],
  },
  {
    categoria: "Boneless",
    lista: [
      new Comida("BBQ", 8.99),
      new Comida("Lemon Pepper", 12.99),
      new Comida("Parmesano", 5.99),
      new Comida("Flamin's Hot", 14.99),
      new Comida("Bufalo", 9.99),
    ],
  },
];

export default function handler(req, res) {
  const { pid } = req.query;
  if (Menu[pid]) res.status(200).json(Menu[pid]);
  else res.status(404).json({ error: "No data" });
}
