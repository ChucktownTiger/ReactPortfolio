import React, { useEffect } from 'react';
import { Link, useLocation} from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

import { useState } from 'react';



function NavBar() {
    
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location] )

return (
    <div className='navbar'>
        {/* <div className='toggleButtton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}> <ReorderIcon />
            </button>   id={expandNavbar ? "open" : "close"}
        </div> */}
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/hobbies"> Hobbies </Link>
        </div>
    </div>
    )
}

export default NavBar