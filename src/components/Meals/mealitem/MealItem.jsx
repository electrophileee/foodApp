
import React, { useContext } from 'react'
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/Cart-Context';

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className='flex justify-between m-4 pb-4 border-b-4 border-[solid_#ccc]  ml-1' >
      <div>
        <h1 className='mt-1 font-bold text-[1.25rem]'>{props.name}</h1>
        <div className='italic'>{props.description}</div>
        <div className='mt-1 font-bold text-[#ad5502] text-[1.25rem]'>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem