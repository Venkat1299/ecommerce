import { Fragment } from "react";
import { Navbar, ProductCardHorizontal } from "../../components";
import { useCart } from "../../context/cart-context";
import "./Cart.css";
export const Cart = () => {
    const { cart } = useCart();
    console.log(cart)
    return (
        <Fragment>
            <Navbar />
            <main className="main">
            {
                cart && cart.length > 0 ? (
                    <>
                        <h2>Your Cart: ({cart.reduce((total, item) => total + item.quantity, 0)}) items</h2>
                        <div className="main-cart">
                            {cart.map(product => <ProductCardHorizontal key={product.id} product={product} />)}
                        </div>
                    </>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h3>Your Cart is Empty</h3>
                        <p>Looks like you haven't added any items to your cart yet. Start shopping to fill it up!</p>
                        <a href="/" className="btn">Continue Shopping</a>
                    </div>
                )
            }
            </main>
            
        </Fragment>
        
    )
}