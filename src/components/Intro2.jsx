import '../styles/Intro2.css';
import Intro2Photo from '../assets/Intro2Photo.jpeg'
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FaImdb } from 'react-icons/fa';


const Intro2 = () => {

    return(
        <div className='intro2'>
            <h3 id='intro2Title'>
                About Me
            </h3>
            <div className='intro2Body'>
                <div className='imageContainer'>
                    <img src={Intro2Photo} alt="Placeholder" className='introImage' loading='lazy'/>
                </div>
                <div className='intro2Contact'>
                    <h3 id='segmentTitle'>Find Me Online</h3>
                    <br/>
                    <table className='linksTable'>
                        <tbody>
                            <tr className='contactRow'>
                                <td id='icon'><FiMail /></td>
                                <td id='content'><a href="mailto:baminervino@hotmail.com" target="_blank" aria-label='Opens in a new tab'>baminervino@hotmail.com</a></td>
                            </tr>
                            <tr className='contactRow'>
                                <td id='icon'><FiLinkedin /></td>
                                <td id='content'><a href='https://www.linkedin.com/in/ba-minervino' target='_blank' aria-label='Opens in a new tab'>Ben Anthony Minervino</a></td>
                            </tr>
                            <tr className='contactRow'>
                                <td id='icon'><FiInstagram /></td>
                                <td id='content'><a href='https://www.instagram.com/minerv.51/' target='_blank' aria-label='Opens in a new tab'>@minerv.51</a></td>
                            </tr>
                            <tr className='contactRow'>
                                <td id='icon'><FiGithub /></td>
                                <td id='content'><a href='https://github.com/minerv51' target='_blank' aria-label='Opens in a new tab'>minerv51</a></td>
                            </tr>
                            <tr className='contactRow'>
                                <td id='icon'><FaImdb /></td>
                                <td id='content'><a href='https://www.imdb.com/name/nm17341173/?ref_=ra_sb_ln' target='_blank' aria-label='Opens in a new tab'>Ben Anthony Minervino</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='intro2ContactMobile'>
                        <a href='mailto:baminervino@hotmail.com' target="_blank" aria-label='Opens in a new tab' className='mobileIcons'><FiMail /></a>
                        <a href='https://www.linkedin.com/in/ba-minervino' target='_blank' aria-label='Opens in a new tab' className='mobileIcons'><FiLinkedin /></a>
                        <a href='https://www.instagram.com/minerv.51/' target='_blank' aria-label='Opens in a new tab' className='mobileIcons'><FiInstagram /></a>
                        <a href='https://github.com/minerv51' target='_blank' aria-label='Opens in a new tab' className='mobileIcons'><FiGithub /></a>
                        <a href='https://www.imdb.com/name/nm17341173/?ref_=ra_sb_ln' target='_blank' aria-label='Opens in a new tab' className='mobileIcons'><FaImdb /></a>
                    </div>
                </div>
            </div>
            <div className='intro2Text'>
                <div className='introContent'>
                    <p className='introParagrapph'>
                        Hi! I’m Ben Anthony (B.A.) Minervino, a 22-year-old Business Technology Management student at Toronto Metropolitan University. I’m passionate about technology, entrepreneurship, and building things that make an impact. Outside of academics, you’ll find me working on projects for my recently founded tech company, OmniActus, or exploring my interests in AI, software and game development, and finance.
                    </p>
                    <br />
                    <p className='introParagrapph'>
                        In my free time, I enjoy photography, fitness, coding, hockey, gaming, and spending time with my girlfriend and friends. I’m driven by curiosity, creativity, and a desire to push boundaries—always striving to learn, grow, and turn ideas into reality at the intersection of business and technology.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Intro2;