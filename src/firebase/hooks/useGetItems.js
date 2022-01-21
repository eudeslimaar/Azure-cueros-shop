import { useState, useEffect } from "react";
import { db } from "../firebase";

const useGetItems = () => {
  const [items, setItems] = useState([]);
  const [ultimoItem, setUltimoItem] = useState(null);
  const [itemsPorCargar, setItemsPorCargar] = useState(false);

  useEffect(() => {
    const unsuscribe = db
      .collection("productos-tienda")
      .limit(15)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          setUltimoItem(snapshot.docs[snapshot.docs.length - 1]);
          setItemsPorCargar(true);
        } else {
          setItemsPorCargar(false);
        }

        setItems(
          snapshot.docs.map((gasto) => {
            return { ...gasto.data(), id: gasto.id };
          })
        );
      });

    return unsuscribe;
  }, []);

  return [items, itemsPorCargar, ultimoItem];
};

export default useGetItems;
