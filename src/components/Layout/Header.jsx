import React from "react";
import MealImage from "../../Assets/meals.jpg";
import CartButton from "./CartButton";

const Header =(props)=>{
    return (
        <>
        <header className=" h-[5rem] bg-[#8a2b06] ">
            <div className="flex justify-between   mx-[2rem] px-auto py-2">
            <h1 className="text-2xl text-center text-[#fff] ml-[7rem] text-[2rem]  my-3 font-bold"  >
                DesiChaupal
            </h1>
            <CartButton onClick={props.onShowCart} />
            </div>
            
        </header>
        <div className="w-full h-[25%] z-0 overflow-hidden object-cover">
            <img src={MealImage} alt="A table full of delicious foods " className="w-[200%] h-[60vh] -rotate-2 -translate-y-9 object-cover" /> 
        </div>
        </>
    );
}
export default Header;