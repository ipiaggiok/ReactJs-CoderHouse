import ItemList from "../components/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { db } from "../utils/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"; 


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoriaId } = useParams();

  //componentDidUpdate
  useEffect(() => {
      const fetchData = async () => {
        const querySnapshot = await getDocs(collection( db, "products"));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
  };
  fetchData();
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
