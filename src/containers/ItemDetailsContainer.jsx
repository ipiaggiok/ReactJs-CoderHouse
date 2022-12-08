import React, { useEffect, useState } from "react";
import ItemDetails from "../components/ItemDetails";
import { useParams } from "react-router-dom";
import { firestoreFetchItem } from "../utils/firestoreUtil"

const ItemDetailsContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  //componentDidUpdate
  useEffect(() => {
    firestoreFetchItem(idItem)
      .then((res) => setDato(res))
      .catch((rej) => console.log(rej));
  });

  return <ItemDetails item={dato} />;
};

export default ItemDetailsContainer;
