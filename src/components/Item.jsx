import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = ({ id, title, imgUrl, price }) => {
  return (
    <>
      <Card sx={{ maxWidth: 350, alignItems: "center" }} style={{ borderRadius: 20 }}>
        <CardMedia component="img" height="375" image={imgUrl} alt="product image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}.
          </Typography>
        </CardContent>

        <CardActions className="cardBottom">
          <Typography gutterBottom variant="h4" component="div">
            ${price}
          </Typography>
          <Link to={`/item/${id}`}>
            <Button size="small" color="primary" variant="outlined" style={{textDecoration: "none"}}>
              Mostrar más
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Item;
