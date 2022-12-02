import ItemList from "../components/ItemList";
import { data } from "../utils/data";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoriaId } = useParams();

  //componentDidUpdate
  useEffect(() => {
    customFetch(
      0,
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
        <>
          <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
          </Box>
        </>
      ) : (
        <div className="cardsContainer">
          <ItemList items={datos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
