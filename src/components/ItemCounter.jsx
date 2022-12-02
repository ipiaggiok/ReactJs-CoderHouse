import { React, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

const ItemCounter = ({ stock = 0, initial = 0, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(initial)
  },[initial]);

  const increaseQty = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
    }
  };

 

  return (
    <>
      <div className="counterContainer">
        <div className="quantityBtns">
          <RemoveIcon className="counterIcon" onClick={decreaseQty} />
          <h4 className="countNumber">{quantity}</h4>
          <AddIcon className="counterIcon" onClick={increaseQty} />
        </div>

        <div>
          {stock && quantity
           ? (
            <Button
              variant="outlined"
              color="secondary"
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
