import '../styles/MySkills2.0.css'
import { FaReact, FaPython } from 'react-icons/fa';
import { SiMicrosoftExcel, SiAdobephotoshop } from 'react-icons/si';


function MySkills2 () {

    return(
        <div className='mySkills2'>
            <h1 id='skillTitle'>My Professional Skills</h1>
            <div className='skillList'>
                <FaReact size={250} color="black" title='React' />
                <FaPython size={250} color='black' title='Python' />
                <SiAdobephotoshop size={250} color='black' title='Adobe' />
                <SiMicrosoftExcel size={250} color='black' title='Excel' />
            </div>
        </div>
    )
};

export default MySkills2