import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearitem = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10">
      <h1 className="text-3xl font-bold">cart</h1>
      {cartItem.length === 0 ? (
        <h1> add items to the cart</h1>
      ) : (
        <button
          className="bg-blue-700 text-white p-2 rounded-lg  "
          onClick={clearitem}
        >
          clear cart
        </button>
      )}
      <div className="w-6/12 m-auto">
        {" "}
        <ItemList list={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
