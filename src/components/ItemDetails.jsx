import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import ItemCounter from "./ItemCounter";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetails = ({ item }) => {

  const [countItem, setCountItem] = useState(0);
  const { addItem, totalPurchease } = useContext(CartContext);


  const onAdd=(qty)=>{
    setCountItem(qty);
    addItem(item, qty);
    totalPurchease()
  }

 
  

  return (
    <>
      {item.titulo ? (
        <>
          <div className="infoDetails">
            <div className="detailImg">
              <img src={item.imagen} alt="" style={{ width:"700px" ,borderRadius: "10px" }} />
            </div>
            <div className="descriptionDetails">
              <h1 className="descTitle">{item.titulo}.</h1>
              <h2 className="descBody">{item.descripcion}</h2>
              <h1 className="descPrice">Precio ${item.precio}</h1>
              <h3 style={{color: "rgb(188 188 188)"}}>Stock: {item.stock} unidades.</h3>
              {
                countItem === 0 
                ? <ItemCounter stock={item.stock} onAdd={onAdd}/>
                : <Link to="/cart"><Button variant="contained" color="secondary" style={{textDecoration: "none"}}>Check Out</Button></Link>
              }
            </div>
          </div>
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="secondary" />
          </Box>
        </>
      )}
    </>
  );
};

export default ItemDetails;
