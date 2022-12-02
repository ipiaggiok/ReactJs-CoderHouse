import { createContext, useState } from "react";

export const CartContext = createContext();

//creates functions with global access.
const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])
    
   
    
    //add products to the cart and check are no duplicates, in that case, just increase the quantity. 
    const addItem = (product, qty ) => {
        const foundProduct = cartList.find( element => element.id === product.id);

        foundProduct === undefined 
        ? (setCartList([
                ...cartList,
                {
                    id: product.id,
                    titulo: product.titulo,
                    imagen: product.imagen,
                    precio: product.precio,
                    qtyItem: qty
                }
            ]) )
        : ( foundProduct.qtyItem += qty )
    }

    //removes selected product from cart.
    const removeItem = (productId) => {
        const cleanedCart = cartList.filter( e => e.id !== productId)
        setCartList(cleanedCart)
    }

    //removes all products from cart.
    const clear = () => {
        setCartList([])
    }

    //send to CartWidget the quantity of items.
    const totalQty = () => {
        let totalQty = cartList.map( e => e.qtyItem);
        let total = 0;
        return totalQty.reduce(((accumulator, currentValue) => accumulator + currentValue), total)
    }
    //calculates the sum of all products in the cart.
    const totalPurchease = () => {
        let productsCost = cartList.map( e => e.precio * e.qtyItem )
        let total = 0;
        return productsCost.reduce(((accumulator, currentValue) => accumulator + currentValue), total);     
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, totalQty, totalPurchease}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;