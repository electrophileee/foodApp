import {AiOutlineShoppingCart} from 'react-icons/ai';
const CartButton =(props)=>{
      return (
        <button className='bg-[#4d1601] w-56 justify-center rounded-3xl text-white font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00] flex gap-5 mx-6'>
            <span className='  my-auto'>
            <AiOutlineShoppingCart size={"2rem"}/>
            </span>
            <span className=' my-auto'>Your Cart</span>
            <span className=' bg-[#b94517] w-10 rounded-3xl my-auto'>3</span>
        </button>
      )
}

export default CartButton;