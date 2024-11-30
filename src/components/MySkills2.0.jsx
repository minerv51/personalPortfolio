import '../styles/MySkills2.0.css'
import { FaReact, FaPython } from 'react-icons/fa';
import { SiMicrosoftexcel, SiAdobecreativecloud } from 'react-icons/si';

function MySkills2 () {

    return(
        <div className='mySkills2'>
            <h1 id='skillTitle'>My Technical Skills</h1>
            <div className='skillList'>
                <FaReact size={250} color="black" title='React' className='technicalIcon' />
                <FaPython size={250} color='black' title='Python' className='technicalIcon' />
                <SiMicrosoftexcel size={250} color='black' title='Microsoft Excel' className='technicalIcon' />
                <SiAdobecreativecloud size={250} color='black' title='Adobe Creative Cloud' className='technicalIcon' />
            </div>
        </div>
    )
};

export default MySkills2