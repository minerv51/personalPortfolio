import '../styles/Myskills.css'
import SkillProgress from './SkillProgress'

function Myskills () {

    return (
        <div className='mySkills'>
            <h1 id='skillsTitle'>My Professional Skills</h1>
            <div className='progressBar'>
                <SkillProgress skill="Client Relations & Management" level={90} />
                <SkillProgress skill="Business Strategy" level={85} />
                <SkillProgress skill="Leadership" level={85} />
                <SkillProgress skill="Project Management" level={80} />
                <SkillProgress skill="Excel" level={80} />
                <SkillProgress skill="Adobe Photoshop & Lightroom" level={75} />
                <SkillProgress skill="Python" level={75} />
                <SkillProgress skill="HTML" level={75} />
                <SkillProgress skill="CSS" level={70} />
                <SkillProgress skill='UI Design' level={65} />
                <SkillProgress skill="React" level={65} />
                <SkillProgress skill="Pandas (Python)" level={60} />
                <SkillProgress skill="JavaScript" level={50} />
                <SkillProgress skill="Unity Game Engine" level={35} />
                <SkillProgress skill="SQL" level={30} />
                <SkillProgress skill="C#" level={30} />
            </div>
        </div>
    )
}

export default Myskills