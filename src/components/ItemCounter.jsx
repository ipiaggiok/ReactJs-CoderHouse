import { React, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

const ItemCounter = ({ stock = 0, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
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
          {stock > 0 ? (
            <Button
              variant="outlined"
              sx={{ color: "#d7d7d7" }}
              onClick={() => onAdd(quantity)}
            >
              Agregar al carrito
            </Button>
          ) : (
            <Button variant="outlined" disabled>
              Agregar al carrito
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCounter;
