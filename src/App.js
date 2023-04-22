import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/Notification/Notification";
import { fetchCartData, sendCardData } from "./store/cart-action";
let firstRun = true;
function App() {
  const show = useSelector((state) => state.layout.show);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.layout.notification);
  const dispatch = useDispatch();
  const it = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRun) {
      firstRun = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCardData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
