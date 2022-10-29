import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import dadpic from '../assets/img/MeandWeston.jpg';

function Home() {
    return (
        <div className='Home'>
        <div className='about'>
            <h2>My small part of the internet! </h2>
            <div>
            <img src={dadpic} alt="Father and Son Halloween Costume"/>
                <p>
                    Hi there! I am Todd I am the proud father of a pretty awesome 6 year old boy. 
                    I grew up in a small town in rural South Carolina called Ninety Six... Yes it is a real place.
                    I have two amazing parents whom have been married for over 50 years now. I also have an older sister 
                    and a niece and a nephew!
                </p>
                <p>
                    I graduated from Clemson University in 2007 and enjoy making my way back to campus whenever I can usually for Football games on Saturdays.
                    I currently live in Charleston, South Carolina and have called this wonderful place home for around 15 years now! In my free time 
                    I enjoy gaming, beach and pool days, along with supporting our local sports teams and checking out some of our fantastic local restaurants and breweries! 
                </p>
                <p>
                    I am new to software development and I am looking forward to learning more in the future and growing in the industry!                    
                </p>
                <div className="prompt">
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />   
                </div>   
            </div>
        </div>
        <div className='skills'>
            <h1> Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Front-End</h2>
                    <span>ReactJS, HTML, CSS, NPM, BootStrap</span>
            </li>
                <li className='item'>
                    <h2> Back-End</h2>
                    <span>NodeJS, ExpressJS, GraphQL, MYSQL, MongoDB, </span>
                </li>
            <li className='item'>
                    <h2> Languages</h2>
                    <span>Javascript</span>
                </li>
            </ol>
        </div>
    </div>
    );
};

export default Home