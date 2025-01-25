import '../styles/MySkills3.0.css';

function MySkills3() {

    return (
        <div className='mySkills3'>
            <h1 id='pageTitle'>My Professional Skills</h1>
            <div className = 'skillsSection'>
                <div className='skillContainer'>
                    <h3 className = 'skillTitle' id='featuredTitle'>Featured</h3>
                    <ul className='skillBox' id='featuredSkills'>
                        <li>Front-End Web Development</li>
                        <li>Problem Solving</li>
                        <li>Entrepreneurship</li>
                        <li>Data Analysis</li>
                        <li>Leadership</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className='skillContainer'>
                    <h3 className='skillTitle' id='technicalTitle'>Technical</h3>
                    <ul className='skillBox' id='technicalSkills'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Python</li>
                        <li>Tableau</li>
                        <li>SQL</li>
                        <li>Microsoft Office</li>
                        <li>Database Management</li>
                        <li>Project Management</li>
                    </ul>
                </div>
                <div className='skillContainer'>
                    <h3 className='skillTitle' id='interpersonalTitle'>Interpersonal</h3>
                    <ul className='skillBox' id='interpersonalSkills'>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                        <li>Leadership</li>
                        <li>Problem Solving</li>
                        <li>Time Management</li>
                        <li>Collaboration</li>
                        <li>Critical Thinking</li>
                        <li>Customer Relationship Management</li>
                        <li>Reliability</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default MySkills3;