import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { layoutAction } from "../../store/layout-reducer";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(layoutAction.setShow());
  };
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
