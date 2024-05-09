// useEffect(function , [dependencies])


import React,{useState , useEffect} from "react";

function EffectComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize" , handleResize)
        console.log("EVENT LISTENER ADDED")

        return() =>{
            window.removeEventListener("resize" , handleResize)
            console.log("EVENT LISTENER REMOVED")
        }
    } , [])
    useEffect(()=>{
document.title = `Sige : ${width} X ${height}`
    },[width,height])
    // without useEffect hook how we will coperate this function 
//     window.addEventListener("resige" , handleResize)
//  console.log("EVENT LISTENER ADDED")
    
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(<>
    <p>Windo Width : {width}px</p>
    <p>Windo Height : {height}px</p>
    </>)
}

export default EffectComponent;