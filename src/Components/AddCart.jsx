import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./Features/Cart/CartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Addtocart = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.darkMode);
  const { allcart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  // Functions to handle quantity changes
  const handleQuantityChange = (id, amount) => {
    dispatch(
      getCart(
        allcart.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
      )
    );
  };

  // Function to handle extra sauce toggle
  const handleExtraSauceToggle = (id) => {
    dispatch(
      getCart(
        allcart.map((item) =>
          item.id === id ? { ...item, extraSauce: !item.extraSauce } : item
        )
      )
    );
  };

  // Function to handle promo code application
  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  // Calculate total items and subtotal
  const totalItems =
    allcart && Array.isArray(allcart)
      ? allcart.reduce((acc, item) => acc + item.quantity, 0)
      : 0;

  const subtotal = allcart.reduce(
    (acc, item) => acc + (Number(item.price) * Number(item.quantity) || 0),
    0
  );

  // Calculate total cost including shipping and discount
  const totalCost = subtotal + shippingCost - discount;

  const handleDistanceChange = (e) => {
    const selectedDistance = parseInt(e.target.value) || 0; // Default to 0 if NaN
    setShippingCost(selectedDistance);
  };

  return (
    <div className={mode ? "bg-black" : "bg-white"}>
      <div
        className={
          mode
            ? "container mx-auto py-8 px-8 bg-black"
            : "container mx-auto py-8 px-8"
        }
      >
        <div className="flex justify-between items-center mb-8">
          <h1
            className={
              mode ? "text-2xl font-bold text-white" : "text-2xl font-bold"
            }
          >
            Shopping Cart
          </h1>
          <Link to="/Service" className="text-indigo-600">
            <div className="flex justify-center items-center">
              <FaArrowLeft /> &nbsp; Continue Shopping
            </div>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product List */}
          <div
            className={
              mode
                ? "w-full lg:w-2/3 bg-gray-500 p-6 rounded-lg shadow-md"
                : "w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md"
            }
          >
            <h2
              className={
                mode
                  ? "text-xl font-semibold mb-4 text-white"
                  : "text-xl font-semibold mb-4"
              }
            >
              {totalItems} Items
            </h2>

            {allcart.map((item) => (
              <div
                key={item.id}
                className={
                  mode
                    ? "flex items-center py-4 border-b text-white"
                    : "flex items-center py-4 border-b"
                }
              >
                <img
                  src="./more images/aloo_paratha.jpg"
                  alt={item.name}
                  className="w-20 h-20 rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <h3 className="font-semibold text-lg">₹{item.price}</h3>
                  <button
                    className="text-sm text-red-500 mt-1"
                    onClick={() => {
                      dispatch(
                        getCart(allcart.filter((prod) => prod.id !== item.id))
                      );
                      console.log(item.price);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={item.extraSauce}
                    onChange={() => handleExtraSauceToggle(item.id)}
                  />
                  <span className={mode ? "text-gray-100" : "text-gray-500"}>
                    Extra Sauce
                  </span>
                </div>

                {/* + and - */}

                <div className="flex items-center ml-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className={
                      mode
                        ? "px-2 py-1 text-white border rounded hover:bg-gray-400"
                        : "px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                    }
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}1</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className={
                      mode
                        ? "px-2 py-1 text-white border rounded hover:bg-gray-400"
                        : "px-2 py-1 text-gray-700 border rounded hover:bg-gray-200"
                    }
                  >
                    +
                  </button>
                </div>

                {/*functionality */}
                <div className="text-right ml-4">
                  {console.log(item.price)}
                  {/* <span className="text-gray-700">₹{Number(item.price) * Number(item.quantity) || 0}</span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div
            className={
              mode
                ? "w-full lg:w-1/3 bg-gray-500 p-6 rounded-lg shadow-md"
                : "w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md"
            }
          >
            <h2
              className={
                mode
                  ? "text-xl font-semibold mb-4 text-white"
                  : "text-xl font-semibold mb-4"
              }
            >
              Order Summary
            </h2>

            <div
              className={
                mode
                  ? "flex justify-between py-2 text-white"
                  : "flex justify-between py-2 text-black"
              }
            >
              <span>Items</span>
              <span>₹{subtotal}</span>
            </div>

            <span className={mode ? "text-white" : "text-gray-400"}>
              Shipping
            </span>
            <div
              className={
                mode
                  ? "flex justify-between py-2 text-white"
                  : "flex justify-between py-2 text-black"
              }
            >
              <select
                id="distance"
                className="w-full p-2 border rounded mb-4 text-black"
                onChange={handleDistanceChange}
              >
                <option value="0">Up to 5 km - Free</option>
                <option value="15">5-8 km - ₹15</option>
                <option value="25">9-15 km - ₹25</option>
                <option value="40">Above 15 km - ₹40</option>
              </select>
              <span>₹{shippingCost}</span>
            </div>

            <div className="flex justify-between py-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-2/3 p-2 border rounded"
                placeholder="Enter promo code"
              />
              <button
                onClick={handleApplyPromo}
                className="px-4 py-2 ml-2 bg-blue-500 text-white rounded"
              >
                Apply
              </button>
            </div>

            {discount > 0 && (
              <div className="flex justify-between py-2">
                <span className={mode ? "text-white" : "text-gray-600"}>
                  Discount
                </span>
                <span className={mode ? "text-white" : "text-gray-600"}>
                  ₹{discount}
                </span>
              </div>
            )}

            <div
              className={
                mode
                  ? "flex justify-between py-2 text-white"
                  : "flex justify-between py-2 text-black"
              }
            >
              <span className="font-semibold">Total</span>
              <span className="font-semibold">₹{totalCost}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
