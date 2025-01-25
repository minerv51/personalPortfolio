import '../styles/MySkills2.0.css'
import { FaLaptopCode, FaRocket, FaChartBar, FaDatabase, FaShieldAlt, FaUserTie, FaLightbulb, FaHandshake, FaRegClock, FaPuzzlePiece, FaReact, FaPython, FaHtml5, FaCss3, FaComments, FaUsers, FaRecycle, FaChalkboardTeacher } from 'react-icons/fa';
import { SiMicrosoftexcel, SiMicrosoftpowerpoint, SiTableau } from 'react-icons/si';

function MySkills2 () {

    return(
        <div className='mySkills2'>
            <h1 id='skillTitle'>My Technical Skills</h1>
            <div className='skillList' id='technicalSkillList'>
                <div className='skillContainer'>
                    <FaHtml5 size={150} color='#1B2A41' title='HTML5' className='icon' />
                    <h3 className='iconText'>HTML 5</h3>
                </div>
                <div className='skillContainer'>
                    <FaCss3 size={150} color='#1B2A41' title='CSS3' className='icon' />
                    <h3 className='iconText'>CSS 3</h3>
                </div>
                <div className='skillContainer'>
                    <FaReact size={150} color="#1B2A41" title='React' className='icon' />
                    <h3 className='iconText'>React.js</h3>
                </div>
                <div className='skillContainer'>
                    <FaLaptopCode size={150} color='#1B2A41' title='Front-End Web Development' className='icon' />
                    <h3 className='iconText'>Front-End</h3>
                    <h3 className='iconText'>Web Development</h3>
                </div>
                <div className='skillContainer'>
                    <FaPython size={150} color='#1B2A41' title='Python' className='icon' />
                    <h3 className='iconText'>Python</h3>
                </div>
                <div className='skillContainer'>
                    <SiTableau size={150} color='#1B2A41' title='Tableau' className='icon' />
                    <h3 className='iconText'>Tableau</h3>
                </div>
                <div className='skillContainer'>
                    <FaDatabase size={150} color='#1B2A41' title='SQL' className='icon' />
                    <h3 className='iconText'>Database</h3>
                    <h3 className='iconText'>Management</h3>
                </div>
                <div className='skillContainer'>
                    <FaChartBar size={150} color='#1B2A41' title='Data Analysis' className='icon' />
                    <h3 className='iconText'>Data Analysis</h3>
                </div>
                <div className='skillContainer'>
                    <SiMicrosoftexcel size={150} color='#1B2A41' title='Microsoft Excel' className='icon' />
                    <h3 className='iconText'>Microsoft Excel</h3>
                </div>
                <div className='skillContainer'>
                    <SiMicrosoftpowerpoint size={150} color='#1B2A41' title='Microsoft PowerPoint' className='icon' />
                    <h3 className='iconText'>Microsoft PowerPoint</h3> 
                </div>
            </div>
            <h1 id='skillTitle'>My Interpersonal Skills</h1>
            <div className='skillList' id='interpersonalSkillList'>
                <div className='skillContainer'>
                    <FaComments size={150} color='#1B2A41' title='Communication' className='icon' />
                    <h3 className='iconText'>Communication</h3>
                </div>
                <div className='skillContainer'>
                    <FaRecycle size={150} color='#1B2A41' title='Adaptability' className='icon' />
                    <h3 className='iconText'>Adaptability</h3>
                </div>
                <div className='skillContainer'>
                    <FaChalkboardTeacher size={150} color='#1B2A41' title='Leadership' className='icon' />
                    <h3 className='iconText'>Leadership</h3>
                </div>
                <div className='skillContainer'>
                    <FaPuzzlePiece size={150} color='#1B2A41' title='Problem Solving' className='icon' />
                    <h3 className='iconText'>Problem Solving</h3>
                </div>
                <div className='skillContainer'>
                    <FaRegClock size={150} color='#1B2A41' title='Time Management' className='icon' />
                    <h3 className='iconText'>Time Management</h3>
                </div>
                <div className='skillContainer'>
                    <FaHandshake size={150} color='#1B2A41' title='Collaboration' className='icon' />
                    <h3 className='iconText'>Collaboration</h3>
                </div>
                <div className='skillContainer'>
                    <FaLightbulb size={150} color='#1B2A41' title='Crtical Thinking' className='icon' />
                    <h3 className='iconText'>Critical Thinking</h3>
                </div>
                <div className='skillContainer'>
                    <FaUserTie size={150} color='#1B2A41' title='Customer Relationship Management' className='icon' />
                    <h3 className='iconText'>Customer Relationship</h3>
                    <h3 className='iconText'>Management</h3>
                </div>
                <div className='skillContainer'>
                    <FaShieldAlt size={150} color='#1B2A41' title='Reliability' className='icon' />
                    <h3 className='iconText'>Reliability</h3>
                </div>
                <div className='skillContainer'>
                    <FaRocket size={150} color='#1B2A41' title='Entrepreneurship' className='icon' />
                    <h3 className='iconText'>Entrepreneurship</h3>
                </div>
            </div>
        </div>
    )
};

export default MySkills2