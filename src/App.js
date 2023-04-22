import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { layoutAction } from "./store/layout-reducer";
import Notification from "./components/Notification/Notification";
let firstRun = true;
function App() {
  const show = useSelector((state) => state.layout.show);
  const cart = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.layout.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    const putData = async () => {
      dispatch(
        layoutAction.setNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      const response = await fetch(
        "https://react-redux-b00f2-default-rtdb.firebaseio.com/cart/.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("data sent failed");
      }

    
      dispatch(
        layoutAction.setNotification({
          status: "success",
          title: "Success!!",
          message: "Sent cart data successfully!!",
        })
      );
    };
    if (firstRun) {
      firstRun = false;
      return;
    }
    putData().catch((error) => {
      dispatch(
        layoutAction.setNotification({
          status: "error",
          title: "Error!!",
          message: "Sent cart data failed!!",
        })
      );
    });
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
