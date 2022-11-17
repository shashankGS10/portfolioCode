import React,{useState,useEffect} from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Front-End Developer</button>
                    <h1 className="white">I trust in code.</h1>
                    <h1 className="white">Share me your vision!</h1>
                    <p className="gray">I will bring your vison to exsistence, and I love what I do.</p>
                    <a className="green" href="gsshashank@gmail.com">Let&#39;s catch up!</a>
                </div>
                <Image className="imageOnLarge" src="/images/human.png" width={550} height={513} alt="shashank"  /> 
            </div>
        </header>
    )
}