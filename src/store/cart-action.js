import { cartAction } from "./cart-reducer";
import { layoutAction } from "./layout-reducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-b00f2-default-rtdb.firebaseio.com/cart/.json"
      );
      if (!response.ok) {
        throw new Error("Could not find elements");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData)
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        layoutAction.setNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching cart data failed!!",
        })
      );
    }
  };
};

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      layoutAction.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );
    const sendRequest = async () => {
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
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        layoutAction.setNotification({
          status: "error",
          title: "Error!!",
          message: "Sent cart data failed!!",
        })
      );
    }
  };
};
