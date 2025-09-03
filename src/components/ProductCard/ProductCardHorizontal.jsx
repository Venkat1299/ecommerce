import { useCart } from "../../context/cart-context";
import "./ProductCardHorizontal.css";
export const ProductCardHorizontal = ({product}) => {
    const { id, name, image, oldPrice, newPrice, discount, quantity } = product;
    const { cartDispatch } = useCart();
    const handleDecrement = (id) => {
        cartDispatch({
            type: "DECREMENT",
            payload: id
        })
    }
    const handleIncrement = (id) => {
        cartDispatch({
            type: "INCREMENT",
            payload: id
        })
    }
    const handleRemove = (id) => {
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        })
    }
    return (
    <div className="card-horizontal">
        <div className="card-hori-image-container">
            <img className="card-image" src={image} alt={name} />
        </div>
        <div className="card-details">
            <div className="card-title">{name}</div>
            <div className="card-description">
                <p className="card-price">
                    Rs. {newPrice}
                    <span className="price-strike-through">Rs. {oldPrice}</span>
                    <span className="discount">({discount}% OFF)</span>
                </p>
            </div>
            <div className="quantity-container">
                <p className="q-title">Quantity:</p>
                <div className="count-container">
                    <button className="count" onClick={() => handleDecrement(id)} disabled={quantity === 1}>-</button>
                    <span className="count-value">{quantity}</span>
                    <button className="count" onClick={() => handleIncrement(id)}>+</button>
                </div>
            </div>
            <div className="cta-actions">
                <button className="button btn-danger" onClick={() => handleRemove(id)}>Remove from Cart</button>
                <button className="button btn-outline">Move to ❤️</button>
            </div>
        </div>
    </div>
)
}