import React from "react"
import logo from '../images/logo.png';


export default function Header(): JSX.Element {
    return(
        <div className="headerbar">
            <img src={logo} alt="Logo" className="headerlogo"/>
            <div className="headertext"> my travel journal. </div>
        </div>
    )
}