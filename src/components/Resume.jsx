import '../styles/Resume.css'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaUserTie, FaLaptopCode, FaRegLightbulb, FaBolt, FaChartPie } from 'react-icons/fa'
import { HiOutlineChartBar} from 'react-icons/hi'
import { GiMuscleUp } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { SiPython } from 'react-icons/si'

function ResumeSection () {

    return (
        <div className='resumeSection'>
            <div className='resumeTitle'>
                <h1>My Resume</h1>
                <p>Here you’ll find a summary of my experience, education, and skills. You can view my resume below or download the PDF version.</p>
            </div>
            <div className='resumeDownload'>
                <a href='/resume.pdf' download='baminervino_resume.pdf'>
                    <button id='downloadButton'>
                        Download Resume
                    </button>
                </a>
            </div>
            <div className='skillsContent'>
                <h1>My Key Skills</h1>
                <div className='skillsList'>
                    <div className='skillItem'>
                        <AiOutlineClockCircle className='skillIcon' />
                        <h3 className='skillText'>Time Management & Organization</h3>
                    </div>
                    <div className='skillItem'>
                        <FaUserTie className='skillIcon' />
                        <h3 className='skillText'>Leadership & Team Collaboration</h3>
                    </div>
                    <div className='skillItem'>
                        <HiOutlineChartBar className='skillIcon' />
                        <h3 className='skillText'>Project Management</h3>
                    </div>
                    <div className='skillItem'>
                        <GiMuscleUp className='skillIcon' />
                        <h3 className='skillText'>Hard-Working, Determined, & Ambitious</h3>
                    </div>
                    <div className='skillItem'>
                        <FaLaptopCode className='skillIcon' />
                        <h3 className='skillText'>Frontend Web Design & Development</h3>
                    </div>
                    <div className='skillItem'>
                        <FaRegLightbulb className='skillIcon' />
                        <h3 className='skillText'>Creative Problem Solving</h3>
                    </div>
                    <div className='skillItem'>
                        <FaBolt className='skillIcon' />
                        <h3 className='skillText'>Adaptability & Quick Learning</h3>
                    </div>
                    <div className='skillItem'>
                        <MdComputer className='skillIcon' />
                        <h3 className='skillText'>Microsoft Office Proficiency</h3>
                    </div>
                    <div className='skillItem'>
                        <SiPython className='skillIcon' />
                        <h3 className='skillText'>Python Programming</h3>
                    </div>
                    <div className='skillItem'>
                        <FaChartPie className='skillIcon' />
                        <h3 className='skillText'>Data Analysis & Visualization Through Tableau</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection