import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidget() {

  const { totalQty } = useContext(CartContext);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalQty()} color="secondary">
        <ShoppingCartIcon fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
}
