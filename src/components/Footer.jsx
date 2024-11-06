import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import '../styles/Footer.css'

function Footer () {

    return (
        <div className='footer'>
            <p>&copy; 2024 Ben Anthony Minervino. All rights reserved.</p>
            <div className='footerLinks'>
                <a href='https://www.linkedin.com/in/ba-minervino' target='_blank'><FiLinkedin /></a>
                <a href='https://www.instagram.com/minerv.51/' target='_blank'><FiInstagram /></a>
                <a href='https://github.com/minerv51' target='_blank'><FiGithub /></a>
            </div>
        </div>
    )
}

export default Footer