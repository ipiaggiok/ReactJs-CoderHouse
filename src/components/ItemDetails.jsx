import React from "react";
import ItemCounter from "./ItemCounter";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemDetails = ({ item }) => {
  return (
    <>
      {item.titulo ? (
        <>
          <div className="infoDetails">
            <div className="detailImg">
              <img src={item.imagen} alt="" style={{ borderRadius: "10px" }} />
            </div>
            <div className="descriptionDetails">
              <h1 className="descTitle">{item.titulo}.</h1>
              <h2 className="descBody">{item.descripcion}</h2>
              <h1 className="descPrice">Precio ${item.precio}</h1>
              <ItemCounter />
            </div>
          </div>
        </>
      ) : (
        <>
          <Box className="progressComp" sx={{ display: "flex" }}>
            <CircularProgress color="secondary" />
          </Box>
        </>
      )}
    </>
  );
};

export default ItemDetails;
