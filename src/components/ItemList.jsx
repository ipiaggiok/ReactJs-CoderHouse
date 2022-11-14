import React from "react";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemList = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => (
          <div className="itemCard" key={item.id}>
            <Item
              id={item.id}
              title={item.titulo}
              imgUrl={item.imagen}
              price={item.precio}
            />
          </div>
        ))
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

export default ItemList;
