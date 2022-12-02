import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {

    const { cartList, clear, removeItem, totalPurchease } = useContext( CartContext );

    return (
        <>
        <div>
            <h1 style={{color:"gray", display:"flex", justifyContent:"center"}}>Carrito de Compras</h1>
            <div>
            {
                cartList.length === 0 
                ? ( 
                    <div className="cartContainer"><p style={{ color:"white"}}>Tu carrito está vacío.</p>
                    <Link to="/" style={{textDecoration: "none"}}> <Button  variant="contained" color="secondary">Ver Productos</Button></Link></div> )
                :  (
                    cartList.map( e => <div className="itemsCart" key={e.id}>
                    <DeleteOutlinedIcon color="secondary" onClick={() => removeItem(e.id)} style={{cursor:"pointer", fontSize:"40px"}}/>
                    <img src={e.imagen} alt="" style={{ borderRadius: "10px", width:"140px" }} />
                    <h1 style={{color:"white", fontSize:"25px"}}>   {e.titulo} - {e.qtyItem} unidad/es - Sub-Total ${e.precio * e.qtyItem}</h1></div>)   
                )
            }
            </div>
            { 
                (cartList.length !== 0) &&
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                        <h1 className="divTotalPrice">Total: ${totalPurchease()}</h1>
                    </div>
            }
            {
                cartList.length !== 0
                ? (<div style={{display:"flex", justifyContent: "space-evenly"}}><Button variant="outlined" onClick={clear} color="secondary">Vaciar Carrito</Button><Button variant="outlined" color="secondary">Finalizar Compra</Button></div>)
                : (<></>) 
            }
        </div>
        </>
    )
}

export default Cart;