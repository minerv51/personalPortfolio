import '../styles/Myskills.css'
import SkillProgress from './SkillProgress'

function Myskills () {

    return (
        <div className='mySkills'>
            <h1 id='skillsTitle'>My Professional Skills</h1>
            <div className='progressBar'>
                <SkillProgress skill="Client Relations & Management" level={90} />
                <SkillProgress skill="Python" level={85} />
                <SkillProgress skill="Business Strategy" level={85} />
                <SkillProgress skill="Leadership" level={85} />
                <SkillProgress skill="Project Management" level={80} />
                <SkillProgress skill="Adobe Photoshop & Lightroom" level={75} />
                <SkillProgress skill="React" level={75} />
                <SkillProgress skill="Excel" level={70} />
                <SkillProgress skill="Pandas (Python)" level={65} />
            </div>
        </div>
    )
}

export default Myskills