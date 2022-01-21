import { db } from "./firebase";


const addItem = async ({
  id,
  categoria,
  nombre,
  precio,
  image,
  stock,
}) => {
  db.collection("productos-tienda").doc(id).set({
    id: id,
    categoria: categoria,
    nombre: nombre,
    precio: precio,
    image: image,
    stock: stock,
  });
};

export default addItem;