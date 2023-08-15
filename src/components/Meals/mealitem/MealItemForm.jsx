import React,{useRef,useState} from 'react'
import Input from '../../UI/Input'


function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='text-right' onSubmit={submitHandler}>
       <Input
       ref={amountInputRef}
       label='Amount' 
       input={{
        id:'amount_'+ props.id,
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue :'1'
       }} />
       <button className='w-40 font-[inherit] cursor-pointer bg-[#8a2b06] border-[1px] color-white border-[solid_#8a2b06] rounded-[20px] font-bold pt-1 pb-1 pl-4 pr-4 hover:bg-[#641e03] hover:border-[#641e03] active:bg-[#641e03] active:border-[#641e03] '>+Add</button>
       {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
     </form>
  )
}

export default MealItemForm