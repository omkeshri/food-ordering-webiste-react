import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { Link } from "react-router-dom";
import { clearCart } from "../util/cartSlice";
import { useState, useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((sum, item) => {
      return sum + (item.card?.info?.price || 0);
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const dispatch = useDispatch();
  handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="mb-24 flex flex-col items-center p-4">
        <div className="w-2/3 p-4 flex justify-between items-center ">
          <h1 className="font-medium text-3xl tracking-wider">Cart</h1>
          <div>
            <Link to={"/restaurants"}>
              <button className="p-2 m-2 border-2 border-black rounded-lg transition-custom">
                Add Items
              </button>
            </Link>
            <button
              className="p-2 m-2 border-2 border-black rounded-lg transition-custom"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="w-2/3 text-center">
          <Item items={cartItems} />
          {cartItems.length === 0 && (
            <h1 className="m-4 font-medium text-2xl">Your cart is empty!</h1>
          )}
        </div>
        <div className="w-2/3 text-right font-medium m-3 text-xl tracking-wider">
          <span className="text-2xl">Total:</span> Rs.
          {totalPrice / 100}
        </div>
      </div>
    </div>
  );
};

export default Cart;
