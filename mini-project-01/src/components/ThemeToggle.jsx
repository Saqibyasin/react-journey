import React, { useState } from "react";
function ThemeToggle() {
    const[isDark , setIsDark] = useState(false);
    const handleToggle = () =>{
        if(isDark){
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        else{
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }
    return (
        <button onClick={() => {
            setIsDark(!isDark);
            handleToggle();
        }}>
            {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
    );
}
export default ThemeToggle;
