import '../styles/Intro.css'
import aboutImage from '../assets/IMG_4251.png';
import { FiMail } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';


function Intro() {
    
    return (
        <div className='introSection'>
            <h1>About Me</h1>
            <div className='aboutMe'>
                <div className='introBody'>
                    <h3 id='segmentTitle'>
                        Introduction
                    </h3>
                    <br/>
                    <br/>
                    <p>
                        Hi! My name is Ben Anthony (B.A.) Minervino, I am a 21 year old Business Technology Management student currently attending
                        Toronto Metropolitan University. I am aspiring to achieve a Bachelor of Commerce degree from the Ted Rogers School of Management.
                        When I am not at school, I am either finding new adventures to go in with my friends and girlfriend or I am participating in one of my hobbies;
                        photography, fitness, coding, video games, and watching or playing hockey. I am aspiring to develop a career
                        in both business and technology as I have an entrepreneurial and analytical mindset, which complement my passion for technology. I have significant
                        interests in software development, game development and finance. My passions, ambition, and hardworking mindset pushes me to succeed in my endeavors and have
                        an upperhand on the competition.
                    </p>
                    <br/>
                    <br/>
                </div>
                <div className='aboutImage'>
                    <img id='groupImage' src={aboutImage}/>
                </div>
                <div className='contactInfo'>
                    <h3 id='segmentTitle'>Contact Information</h3>
                    <br/>
                    <table className='linksTable'>
                        <tbody>
                            <tr>
                                <td id='icon'><FiMail /></td>
                                <td id='content'>bminervino@torontomu.ca</td>
                            </tr>
                            <tr>
                                <td id='icon'><FiPhone /></td>
                                <td id='content'>+1 (999) 999-9999</td>
                            </tr>
                            <tr>
                                <td id='icon'><FiLinkedin /></td>
                                <td id='content'><a href='https://www.linkedin.com/in/ba-minervino' target='_blank' rel="noopener noreferrer">Ben Anthony Minervino</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Intro