import React from "react";
import Link from "next/link";
import Menu from "./Menu";

export default function NavBar() {

    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <Link href="/">{"<Shashank GS/>"}</Link>
            </div>

            <ul className="flex white">
                <li className="green">
                    <Link href="/">{"< Home />"}</Link>
                </li>
                <li>
                    <Link href="/#about">{"< About Me />"}</Link>
                </li>
                {/* <li>
                    <Menu/>
                </li> */}
            </ul>
        </nav>
    )
}