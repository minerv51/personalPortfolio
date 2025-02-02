import { Link } from 'react-router-dom';
import '../styles/HeroBanner.css'
import heroImage from '../assets/IMG_2663_transparent.png';

function HeroBanner() {

    return (
        <div className='heroBanner'>
            <div className='bannerText' role='contentinfo'>
                <h1>Hi, I'm Ben Anthony Minervino</h1>
                <h3>BComm Student ● Ted Rogers School of Management</h3>
                <br/>
                <p>
                A Business Technology Management student studying at Toronto Metropolitan University. 
                With a passion for technology and a strong entrepreneurial and analytical mindset, I’m 
                driven to build a career that bridges business and tech, with 
                interests in artificial intelligence, software development, game development, and finance.
                </p>
                <br/>
                <br/>
                <h3><Link to="/resume" role='button'>See My Resume</Link></h3>
            </div>
            <img className='heroImage' src={heroImage} alt="A portrait of a man with slicked back dark hair, a trimmed beard, wearing a light blue-green shirt with a transparent bacground." loading='lazy'/>
        </div>
    )
}

export default HeroBanner