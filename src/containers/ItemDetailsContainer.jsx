import React, { useEffect, useState } from "react";
import ItemDetails from "../components/ItemDetails";
import { data } from "../utils/data.js";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
  const [dato, setDato] = useState({});
  const { idItem } = useParams();

  //componentDidUpdate
  useEffect(() => {
    customFetch(
      2000,
      data.find((element) => element.id === parseInt(idItem))
    )
      .then((res) => setDato(res))
      .catch((rej) => console.log(rej));
  });

  return (
    <>
      <ItemDetails item={dato} />
    </>
  );
};

export default ItemDetailsContainer;
