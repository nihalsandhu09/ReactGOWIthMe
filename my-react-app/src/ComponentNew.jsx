// onChange = event handler used primarily with form elements ex . <input> , <textarea> , <select> , <radios> Triggers a function every time the value of the input changes 
import React , {useState} from "react"
function ComponentNew(){

const [name , SetName] = useState("Guest");
const [quantity , setQuanity] = useState(1);
const [comment, setComment] = useState("");
const [payment , setPayment] = useState("MasterCard");
const [shipping , setShipping] = useState("Delivery");


function handleNameChange(e){
    SetName(e.target.value)
}
function handleQuanityChange(e){
    setQuanity(e.target.value)
}

function handleCommentchange(e){
    setComment(e.target.value)
}

function handlePaymentChange(e){
    setPayment(e.target.value)
}

function handleShippingchange(e){
    setShipping(e.target.value)
}
    return(

        <div>
          <input value={name} onChange={handleNameChange}/ > 
          <p > Name : {name}</p>

          <input value={quantity} onChange={handleQuanityChange} type="number" />
          <p>Quantity : {quantity}</p>

          <textarea value={comment} onChange={handleCommentchange} placeholder="Enter delivery instructions"></textarea>
          <p>Comment : {comment}</p>

          <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard" >MasterCard</option>
            <option value="GiftCard">GiftCard</option>
           
          </select>
          
          <p> Payment : {payment} </p>
          <label htmlFor="">
        <input type="radio" value= "Pick Up" 
        checked = {shipping === "Pick Up"} onChange={handleShippingchange}/>
            Pick Up
          </label> <br />
          <label htmlFor="">
          <input type="radio" value= "Delivery" 
        checked = {shipping === "Delivery"} onChange={handleShippingchange}/>
            Delivery
          </label>
          <p>Shipping : {shipping}</p>
        </div>
    )
}
export default ComponentNew