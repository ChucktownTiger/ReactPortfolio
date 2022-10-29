import React, { useEffect } from 'react';
import { Link, useLocation} from "react-router-dom";
import "../styles/NavBar.css";
import TocIcon from './@mui/icons-material/Toc';

function navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)
    }, [location] )

return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButtton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}> <TocIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
            <Link to="/hobbies"> Hobbies </Link>
        </div>
    </div>
  )
}

export default navbar