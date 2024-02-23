import React from "react";
import './backToTop.css';

function BackToTop({scroll}){
    const backToTop=()=>{
        window.scrollTo(0,0);
    };
    return (
        <a
        className={`back-to-top ${scroll>150 ? 'active':undefined}`}
        onClick={backToTop}
        >
            <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
    )
}
export default BackToTop;