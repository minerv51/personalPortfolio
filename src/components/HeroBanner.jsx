import { Link } from 'react-router-dom';
import '../styles/HeroBanner.css'
import heroImage from '../assets/IMG_2663_transparent.png';

function HeroBanner() {

    return (
        <div className='heroBanner'>
            <div className='bannerText'>
                <h1>I Am Ben Anthony Minervino</h1>
                <h3>BComm Student ● Ted Rogers School of Management</h3>
                <br/>
                <p>
                A Business Technology Management student studying at Toronto Metropolitan University. 
                With a passion for technology and a strong entrepreneurial and analytical mindset, I’m 
                driven to build a career that bridges business and tech, with 
                interests in software development, game development, and finance.
                </p>
                <br/>
                <br/>
                <h3><Link to="/resume">See My Resume</Link></h3>
            </div>
            <img className='heroImage' src={heroImage} />
        </div>
    )
}

export default HeroBanner