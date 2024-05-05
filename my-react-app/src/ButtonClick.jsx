// click Event = An intraction when a user clicks on a specific element we can respond to click by passing a callback to the onclick event handler 

function ButtonClick() {
  const handleclick = (e)=> e.target.textContent = "OUCH";
  

  return <button onDoubleClick={(e) => handleclick(e)}>click me</button>;
}
export default ButtonClick;
