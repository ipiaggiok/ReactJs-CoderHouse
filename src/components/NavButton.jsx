import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ButtonSizes = (props) => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Button color="secondary" variant="" size="medium">
        {props.name}
      </Button>
    </Box>
  );
};

export default ButtonSizes;
