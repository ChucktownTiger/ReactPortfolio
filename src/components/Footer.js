import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import DiscordIcon from "../assets/img/discordicon.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className = 'footer'>
            <div className='socials'>
            <Link to="https://www.instagram.com/chucktown_tiger/"><InstagramIcon /> </Link>
            <Link to="https://discord.gg/jbNJnsZX"><DiscordIcon /> </Link>    
            <Link to="https://www.linkedin.com/in/todd-holley-07866156/"></Link> <LinkedInIcon />
            </div>
        </div>
    )
}

export default Footer

