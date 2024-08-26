import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-4 md:p-8">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-2/3">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col mt-8 lg:mt-0 lg:ml-8 shadow-md w-full lg:w-1/3 h-auto lg:h-[700px] items-center p-6 rounded-md hover:bg-orange-200">
            <h2 className="text-3xl lg:text-4xl text-green-700">Your Cart</h2>
            <h1 className="text-4xl lg:text-5xl text-green-700 mt-4 lg:mt-10 font-bold">Summary</h1>

            <p className="text-xl lg:text-2xl text-green-900 mt-4 lg:mt-6 font-semibold">
              Total Items: {cart.length}
            </p>
            <div className="mt-6 lg:mt-auto">
              <p className="text-green-800 text-xl lg:text-2xl font-mono">
                Total Amount: ${total}
              </p>
              <NavLink to ="/">
              <button className="bg-green-500 w-full lg:w-[200px] text-xl lg:text-2xl font-semibold mt-4 lg:mt-6 mb-2 lg:mb-5 items-center rounded-lg p-3 hover:bg-pink-500">
                Check Out
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mx-auto flex-col mt-16 lg:mt-40">
          <p className="font-bold text-2xl text-green-800 mb-4">Cart is Empty!</p>
          <NavLink to="/">
            <button className="text-xl lg:text-2xl bg-green-500 rounded-lg p-3 mt-2 hover:bg-blue-300 duration-100">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
