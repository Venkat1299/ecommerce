import "./ProductCard.css";
import { useCart } from "../../context/cart-context";
import { getProductById } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {

    const { id, name, image, oldPrice, newPrice, rating, discount } = product

    const { cart, cartDispatch } = useCart();

    const isProductInCart = getProductById(cart, id);

    const navigate = useNavigate();

    const handleAddToCartClick = () => {
        cartDispatch({
            type: "ADD_TO_CART",
            payload: product
        })
        navigate("/cart");
    }

    const handleGoToCartClick = () => {
        navigate("/cart");
    }
return (
    <div className="card">
        <div className="card-image-container">
            <img className="card-image" src={image} alt={name} />
        </div>
        <div className="card-details">
            <div className="card-title">{name}</div>
            <div className="card-description">
                <p className="card-price">
                    <span className="new-price">Rs. {newPrice}</span>
                    <span className="price-strike-through">Rs. {oldPrice}</span>
                    <span className="discount">({discount}% OFF)</span>
                </p>
                <p className="rating">
                    <span className="star material-icons-outlined">star</span>
                    {rating}
                </p>
            </div>
            <div className="cta-btn">
                <button
                    className="cart-btn"
                    onClick={isProductInCart ? handleGoToCartClick : handleAddToCartClick}
                >
                    {isProductInCart ? "Go To Cart" : "Add To Cart"}
                </button>
            </div>
        </div>
    </div>
)
}