class Comida {
  constructor(nombre, precio, ingredientes = null) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
  }
}

export const RESTAURANT_MENU = [
  {
    categoria: "Hamburguesas",
    logo: "https://cdn-icons-png.flaticon.com/512/5787/5787016.png",
    /* cover:
      "https://img4.goodfon.com/wallpaper/nbig/0/96/burger-bulochka-kotleta-ovoshchi.jpg", */
    lista: [
      new Comida("Texana Burger", 169, [
        "150gr. de Carne",
        "Aros de cebolla",
        "Doble queso americano",
        "Tocino",
        "Champiñones",
        "Lechuga Orejona",
        "Tomate",
        "Pan Artesanal",
      ]),
      new Comida("CheeseBurger", 99, [
        "150gr. de Carne",
        "Doble queso",
        "Mayonesa",
      ]),
      new Comida("Suprema", 119, [
        "150gr. de Carne",
        "Doble queso",
        "Cebolla morada",
        "Pepinillos",
        "Mayonesa",
      ]),
      new Comida("Double", 155, [
        "Doble porcion de carne",
        "Cuatro quesos",
        "Lechuga Orejona",
        "Pepinillos",
        "Cebolla Morada",
        "Mayonesa",
      ]),
      new Comida("Medio kilo", 199, [
        "500gr. de Carne",
        "Seis quesos",
        "Lechuga Orejona",
        "Tomate",
        "Cebolla Morada",
        "Mayonesa",
      ]),
      new Comida("Tender-Burger", 145, [
        "Chicken Tenders gratinados",
        "Doble queso americano",
        "Pepinillos",
        "Mayonesa",
      ]),
      new Comida("Buffalo", 149, [
        "Chicken Tenders",
        "Doble queso",
        "Buffalo",
        "Ranch",
        "Lechuga",
        "Tomate",
        "Cebolla",
        "Pepinillos",
        "Mayonesa",
      ]),
      new Comida("Bandera", 165, [
        "Pechuga de pollo a la plancha",
        "Queso asadero",
        "Camarones",
        "Pimienta",
        "Lechuga orejona",
        "Tomate",
        "Cebolla morada",
        "Pan artesanal",
      ]),
      new Comida("Camarón", 195, [
        "150gr. de Carne",
        "Doble queso americano",
        "Camarones",
        "Tocino",
        "Aros de cebolla",
        "Aguacate",
        "Lechuga",
        "Tomate",
        "Pepinillos",
        "Aderezos",
      ]),
      new Comida("PizzaBurger", 149, [
        "150gr. de Carne",
        "Queso Mozzarella",
        "Salsa de tomate",
        "Pepperoni",
      ]),
      new Comida("Norteña", 149, [
        "150gr. de Carne",
        "Queso asadero",
        "Tocino",
        "Lechuga Orejona",
        "Guacamole",
        "Cebolla",
      ]),
      new Comida("Philadelphia", 159, [
        "150gr. de Carne",
        "Philadelphia",
        "Tocino",
        "Salsas de mango habanero",
        "Lechuga Orejona",
      ]),
      new Comida("StickBurger", 179, [
        "Dedos de queso",
        "Tocino",
        "Doble Carne",
        "Cuatro quesos",
        "Lechuga Orejona",
        "Tomate",
        "Cebolla Morada",
        "Mayonesa",
      ]),
      new Comida("Ramos", 179, [
        "150gr. de Carne",
        "Queso asadero",
        "Chicharron Ramos",
        "Aguacate",
        "Lechuga",
        "Tomate",
        "Cebolla",
      ]),
    ],
    extras: [
      new Comida("Carne hamburguesa", 45),
      new Comida("Mozzarella o Asadero", 30),
      new Comida("Camarones extra", 39),
      new Comida("Tocino", 30),
      new Comida("Aguacate", 30),
      new Comida("Queso americano", 25),
    ],
  },
  {
    categoria: "Boneless",
    logo: "https://cdn2.iconfinder.com/data/icons/chicken-animal-farm-raw-meat-food/100/breast_boneless_skinless_chicken_color_animal_farm-512.png",
    /* cover:
      "https://st2.depositphotos.com/1692343/6977/i/450/depositphotos_69771817-stock-photo-hot-and-spicy-boneless-buffalo.jpg", */
    lista: [
      new Comida("8 boneless (1 sabor)", 149),
      new Comida("12 boneless (1 - 2 sabores)", 179),
      new Comida("20 boneless (1 - 2 sabores)", 259),
      new Comida("30 boneless (1 - 3  sabores)", 329),
    ],
    sabores: [
      "Buffalo",
      "Mango Habanero",
      "Cheddar Jalapeño",
      "Parmesano",
      "Chipotle Habanero",
      "Lemon Pepper",
      "BBQ",
    ],
  },
  {
    categoria: "Rollos",
    logo: "https://cdn-icons-png.flaticon.com/512/1539/1539414.png",
    /* cover:
      "https://scontent.fnld1-1.fna.fbcdn.net/v/t39.30808-6/323373855_835428937676055_5629445503960300828_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFKK5Ya9asJkO5mBvNms3zDmLJMqv8noYGYskyq_yehgRiVt4tVThqVYYARSaWZUseukt8n-oYdp68x_Ha0FjZs&_nc_ohc=finJx_tKVLgAX8sYWPy&_nc_ht=scontent.fnld1-1.fna&oh=00_AfASbNlU9kejfEG8-AwmrrUYI-l10mAcncBWbUslegrJHg&oe=6434C379", */
    lista: [
      new Comida("Rollo Camaron", 129),
      new Comida("Rollo Carne", 119),
      new Comida("Rollo Pollo", 119),
    ],
  },
  {
    categoria: "Antojos",
    logo: "https://cdn-icons-png.flaticon.com/512/859/859293.png",
    cover: null,
    lista: [
      new Comida("Papa Asada", 135, [
        "Carne asada",
        "Mantequilla",
        "Queso Asadero",
        "Queso Chedar",
        "Frijoles",
        "Totopos",
        "Salsa",
        "Crema",
      ]),
      new Comida("Papa Bufalo", 135, [
        "Papa asada",
        "Chicken tenders bañados en buffalo",
        "Ranch",
        "Queso Chedar",
        "Totopos",
      ]),
      new Comida("Papa Chill", 199, [
        "Carne asada",
        "Camarones",
        "Queso Asadero",
        "Queso Chedar",
        "Tocino",
        "Cebolla",
        "Aguacate",
        "Crema",
        "Aderezo",
        "Chipotle",
        "Totopos",
      ]),
      new Comida("Chicken Tenders Fries", 149, [
        "Chicken Tenders con Papas fritas bañadas en buffalo y ranch o con 2 aderezos aparte",
      ]),
      new Comida("Panchos", 120, [
        "Totopos",
        "Queso Chedar",
        "Frijoles",
        "Carne asada",
        "Guacamole",
        "Crema",
      ]),
      new Comida("Frito Pie-Flamin-Nachos", 45, [
        "Queso Chedar",
        "Frijoles",
        "Jalapeños",
      ]),
    ],
  },
  {
    categoria: "Bebidas",
    logo: "https://cdn-icons-png.flaticon.com/512/1973/1973550.png",
    cover: null,
    lista: [
      new Comida("Refresco", 35),
      new Comida("Agua", 22),
      new Comida("Arizona", 40),
      new Comida("Malteadas", 109),
      new Comida("Smoothies", 99),
      new Comida("Limonada LT", 55),
    ],
  },
  {
    categoria: "Cervezas",
    logo: "https://cdn-icons-png.flaticon.com/512/1651/1651782.png",
    cover: null,
    lista: [
      new Comida("Amster Ultra", 40),
      new Comida("XX", 40),
      new Comida("Heineken", 40),
      new Comida("High Life", 45),
      new Comida("Indio", 40),
      new Comida("Tecate Lite", 40),
      new Comida("Michelob Ultra", 45),
      new Comida("Yarda Nacional", 190),
      new Comida("Yarda Michelob Ultra", 269),
      new Comida("Yarda High Life", 249),
      new Comida("Cubeta", 220),
    ],
  },
  {
    categoria: "Bebidas preparadas",
    cover: null,
    logo: "https://cdn-icons-png.flaticon.com/512/5295/5295793.png",
    lista: [
      new Comida("Clamatos", 80),
      new Comida("Clamatos c/ cerveza", 99),
      new Comida("Margaritas", 99, ["mango", "limon", "fresa"]),
      new Comida("Piña colada", 99),
    ],
  },
  {
    categoria: "JumboDogs",
    cover: null,
    logo: "https://cdn-icons-png.flaticon.com/512/3480/3480814.png",
    lista: [
      new Comida("Americano", 79, ["Queso Cheddar", "Frijoles", "Aderezo"]),
      new Comida("Norteño", 110, [
        "Carne asada",
        "Queso asadero",
        "Cebolla",
        "Cilantro",
      ]),
      new Comida("PizzaDog", 110, [
        "Queso Mozzarella",
        "Pepperoni",
        "Salsa de tomate",
      ]),
      new Comida("Chihuahua", 110, [
        "Guacamole",
        "Tocino",
        "Salsa chipotle",
        "Aderezos",
      ]),
      new Comida("Flaming Dog", 110, [
        "Flammin' Hot",
        "Queso Cheddar",
        "Aderezo chipotle",
      ]),
      new Comida("Bufalo Tender Dog", 115, [
        "Chicken Tenders bañados en salsa buffalo y Ranch",
      ]),
    ],
  },
  {
    categoria: "Papas",
    cover: null,
    logo: "https://cdn-icons-png.flaticon.com/512/4459/4459356.png",
    lista: [
      new Comida("Papa preparada", 80, [
        "Queso Cheddar",
        "Frijoles",
        "Jalapeño",
      ]),
      new Comida("Flamming Fries", 125, [
        "Chetos Flamin",
        "Papas Fritas",
        "Queso Cheddar",
        "Carne",
        "Guacamole",
        "Crema",
        "Aderezo Chipotle",
      ]),
      new Comida("Norteño Fries", 99, [
        "Queso Cheddar",
        "Frijoles",
        "Carne asada",
      ]),
      new Comida("Bacon Fries", 95, ["Queso Cheddar", "Tocino", "Jalapeño"]),
      new Comida("Pizza Papa's", 120, [
        "Queso Mozzarella",
        "Pepperoni",
        "Queso Parmesano",
      ]),
      new Comida("Papas Fritas Naturales", 50, ["Papas fritas clasicas"]),
    ],
    extras: [
      new Comida("Carne asada", 30),
      new Comida("Aguacate", 30),
      new Comida("Queso Cheddar", 25),
      new Comida("Tocino", 30),
    ],
  },
];

export const COMBOS_MENU = [
  {
    nombre: "Paquete 1",
    precio: 529,
    lista: [
      "3 Rollos (Camarón, carne y pollo)",
      "Orden de Chicken Tenders",
      "Orden de Papas Fritas",
      "2 Refrescos y Aderezos",
    ],
  },
  {
    nombre: "Paquete 2",
    precio: 649,
    lista: [
      "3 Rollos (Camarón, carne y pollo)",
      "2 CheeseBurgers",
      "Orden de Chicken Tenders",
      "Papas fritas y Aderezos",
    ],
  },
  {
    nombre: "Paquete 3",
    precio: 549,
    lista: [
      "2 Hamburguesas Supremas",
      "12 Boneless",
      "Orden Aros de Cebolla",
      "Chicken Pops",
      "Aderezos",
    ],
  },
  {
    nombre: "Combo Pareja",
    precio: 399,
    lista: ["2 Rollos (Camarón y carne)", "2 CheeseBurger", "Aderezos"],
  },
  {
    nombre: "Pizza Pack",
    precio: 549,
    lista: [
      "2 PizzaBurger",
      "PizzaDog",
      "2 CheeseBurger",
      "Flamin Fries",
      "2 Arizona",
    ],
  },
  {
    nombre: "CheeseBurger + Flaming Fries",
    precio: 349,
    lista: ["2 CheeseBurger", "1 Flaming Fries", "2 Refrescos"],
  },
  {
    nombre: "Sushi Pops",
    precio: 300,
    lista: [
      "Sushi Pops",
      "2 Rollos (Camarón y carne)",
      "Orden de Chicken Pops",
      "Aderezos",
    ],
  },
];

export const LISTA_DIRECCIONES = [
  {
    sucursal: "Anzures",
    direccion: "Prol Av Monterrey 402, Lagos, 88290 Nuevo Laredo, Tamps.",
    horario: "13:00 - 22:00",
    telefono: "867 - 243 - 1509",
    servicios: [
      "Consumo en el lugar",
      "Pedido desde automovil",
      "Entrega a domicilio",
    ],
    maps: "https://goo.gl/maps/C7xZG6L1VuAvAi3B9",
    foto: "https://pr1.nicelocal.com.mx/XIQWOEI84LRoyCRb_azurQ/587x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2VRC6WLQJL1IszMOyXOGCxjBBxqSR8h6Pm5FjbGhTvSU2iQAbnFcDQ3Hp18TP7wCnQ",
  },
  {
    sucursal: "Campeche",
    direccion: "Av. Ocampo 3216, Madero, 88270 Nuevo Laredo, Tamps.",
    horario: "13:00 - 22:00",
    telefono: "867 - 334 - 4681",
    servicios: [
      "Consumo en el lugar",
      "Pedido desde automovil",
      "Entrega a domicilio",
    ],
    maps: "https://goo.gl/maps/oNA7jgtM58oKkf8H8",
    foto: "https://pr1.nicelocal.com.mx/1DsBVyMUGCzBhyYHbI5Ftw/330x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2b6xSkGKvJPKQ8TV-Vc7-ELljLRYlf3T358ESVKeAGU2uITCDHdqtHYGntHNw1kN7g",
  },
];
