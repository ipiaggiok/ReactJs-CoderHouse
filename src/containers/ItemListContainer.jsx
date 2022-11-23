import ItemList from "../components/ItemList";
import { data } from "../utils/data";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineProgress from "../components/LineProgress";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoriaId } = useParams();

  //componentDidUpdate
  useEffect(() => {
    customFetch(
      2000,
      data.filter((element) => {
        if (categoriaId === undefined) return element;
        return element.categoriaId === parseInt(categoriaId);
      })
    )
      .then((res) => setDatos(res))
      .catch((rej) => console.log(rej));
  }, [datos, categoriaId]);

  return (
    <>
      {datos.length === 0 ? (
        <LineProgress />
      ) : (
        <div className="cardsContainer">
          <ItemList items={datos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
