import classes from "./CartButton.module.css";
import { useDispatch , useSelector } from "react-redux";
import { layoutAction } from "../../store/layout-reducer";
const CartButton = (props) => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(layoutAction.setShow());
  };
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
