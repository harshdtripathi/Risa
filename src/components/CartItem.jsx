import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function deleteHandler() {
    dispatch(remove(item.id));
  }

  return (
    <div className='p-4'>
      <div className='flex flex-col md:flex-row m-4 gap-4 md:gap-14 mt-[50px] md:mt-[100px] items-center md:items-start'>
        <div className='h-[150px] w-[150px] md:h-[250px] md:w-[250px] hover:scale-110 md:hover:scale-125 transition-all duration-500'>
          <img src={item.image}  className='w-full h-full object-cover'/>
        </div>
        <div className='text-center md:text-left'>
          <h1 className='text-lg md:text-xl text-amber-400'>{item.title}</h1>
          <div className='text-green-400 mt-2'>
            {item.description.length > 30 ? (
              <p>{item.description.slice(0, 30)}...</p> 
            ) : (
              <p>{item.description}</p>
            )}
          </div>
          <p className='text-md text-green-400 mt-2'>${item.price}</p>
          <div className='mt-4'>
            <button onClick={deleteHandler} className='bg-red-500 p-2 rounded-full flex justify-center items-center'>
              <MdDeleteOutline className='text-white' size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className='h-px bg-slate-600 my-4'></div>
    </div>
  );
};

export default CartItem;
