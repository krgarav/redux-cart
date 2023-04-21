import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart-reducer";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  const plusHandler = () => {
    dispatch(
      cartAction.addToCart({
        id,
        title,
        price,
      })
    );
  };
  const minusHandler = () => {
    dispatch(
      cartAction.removeFromCart({
        id
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
