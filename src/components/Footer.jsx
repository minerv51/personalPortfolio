import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaImdb } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer () {

    return (
        <div className='footer'>
            <p className='copyright'>&copy; 2024 Ben Anthony Minervino. All rights reserved.</p>
            <div className='footerLinks'>
                <a href='https://www.linkedin.com/in/ba-minervino' target='_blank' aria-label='Opens in a new tab'><FiLinkedin /></a>
                <a href='https://www.instagram.com/minerv.51/' target='_blank' aria-label='Opens in a new tab'><FiInstagram /></a>
                <a href='https://github.com/minerv51' target='_blank' aria-label='Opens in a new tab'><FiGithub /></a>
                <a href='https://www.imdb.com/name/nm17341173/?ref_=ra_sb_ln' target='_blank' aria-label='Opens in a new tab'><FaImdb /></a>
            </div>
        </div>
    )
}

export default Footer