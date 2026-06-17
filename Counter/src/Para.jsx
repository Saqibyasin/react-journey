import React,{useState} from "react";
function Para(){
    const[show, setShow] = useState(false);
    return(
        <>

        {show && <p> React makes building user interfaces easier by breaking them into small, reusable components. State allows components to update and re-render when data changes.
                                </p>} 
        <button onClick={() => setShow(!show)}>{!show ? "Read More" : "Hide"}</button>
        
        </>
    )
}
export default Para;