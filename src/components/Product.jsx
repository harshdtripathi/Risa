import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/cartSlice'

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [item, setItem] = useState(true)

  function addHandler() {
    dispatch(add(post));
    setItem(true);
  }

  function removeHandler() {
    dispatch(remove(post.id));
    setItem(false);
  }

  return (
    <div className=" hover:scale-110 transition duration-300   lg:flex lg:flex-row lg:gap-4 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ">
      <div className="  flex flex-col   md:grid md:grid-cols-2 gap-2 lg:flex lg:flex-col justify-center items-center mx-auto shadow-[0_3px_10px_rgb(0.2,0,0,0.2)] w-full md:w-[520px] m-7">
        <div className="md:col-span-1 h-[180px]">
          <img className="w-full h-full object-cover" src={post.image} alt={post.title} />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center items-center text-center p-4">
          <p className="text-lg font-semibold">{post.title}</p>
          <p className="text-xl font-bold text-gray-800 mt-2">${post.price}</p>
          <p className="text-sm text-gray-600 mt-1">Rating: {post.rating.rate}</p>
          <div className="mt-4 relative">
            {cart.some((p) => p.id === post.id) ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={removeHandler}
              >
                Remove Items
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={addHandler}
              >
                Add Item
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Product;
