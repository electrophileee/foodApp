import React from "react";
import MealImage from "../../Assets/FoodImage.jpg";

const Header =()=>{
    return (
        <>
        <header className=" h-[5rem] bg-[#8a2b06] ">
            <div className="flex justify-between  mx-7 px-auto py-2">
            <h1 className="text-2xl text-[#fff] font-bold"  >
                desiChaupal
            </h1>
            <button>Cart</button>
            </div>
            
        </header>
        <div className="w-full h-[25%] z-0 overflow-hidden object-cover">
            <img src={MealImage} alt="A table full of delicious foods " className="w-[200%] h-[60vh] -rotate-2 -translate-y-9 object-cover" />
            
  
        </div>
        </>
    );
}
export default Header;