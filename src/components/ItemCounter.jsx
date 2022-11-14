import { React, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

const ItemCounter = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    console.log("El comoponente se actualizó");
  }, [quantity]);

  return (
    <>
      <div className="counterContainer">
        <div className="quantityBtns">
          <RemoveIcon className="counterIcon" onClick={decreaseQty} />
          <h4 className="countNumber">{quantity}</h4>
          <AddIcon className="counterIcon" onClick={increaseQty} />
        </div>
        <div>
          <Button variant="outlined" color="inherit">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCounter;
