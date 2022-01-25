import { db } from "./firebase";


const addItem = async ({
  id,
  categoria,
  descp,
  envio,
  image,
  nombre,
  precio,
  stock,
}) => {
  db.collection("products").doc(id).set({
    id: id,
    categoria: categoria,
    desp: descp,
    envio: envio,
    image: image,
    nombre: nombre,
    precio: precio,
    stock: stock,
  });
};

export default addItem;