import React from "react";
import './button.css';

function Button({icon,name,bgColor='purple',color='#ffffff'}){
    return(
        <a href="#" className="mainBtn" style={{color:color,background:bgColor}}>
        {icon} {name}
        </a>
    )
}

export default Button;