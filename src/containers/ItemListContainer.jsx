import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { fetchData } from "../utils/firestoreUtil";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoriaId } = useParams();

  //componentDidUpdate
  useEffect(() => {
      fetchData(categoriaId)
        .then(res => setDatos(res))
        .catch(err => console.log(err))
  }, [categoriaId]);

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
