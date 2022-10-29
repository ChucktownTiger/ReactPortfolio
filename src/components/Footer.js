import React from 'react';
// import InstagramIcon from "@material-ui/icons/Instagram";
// import DiscordIcon from "../assets/img/discordicon.png";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className = 'footer'>
            <div className='socials'>
            <a href="https://www.instagram.com/chucktown_tiger/"> Instagram </a>
            <a href="https://discord.gg/jbNJnsZX"> Discord Server </a>    
            <a href="https://www.linkedin.com/in/todd-holley-07866156/"> LinkedIn </a>
            </div>
        </div>
    )
}

export default Footer

