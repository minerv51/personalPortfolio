import '../styles/Education.css'

function Education() {

    return(
        <div className='myEdSection'>
            <h1 id='titleEd'>My Education</h1>
            <br/>
            <div className='education'>
                <div className='highSchool'>
                    <h3>Emily Carr Secondary School</h3>
                    <p>York Region District School Board</p>
                    <p>Ontario Secondary School Diploma (OSSD)</p>
                    <p>2017 - 2021</p>
                </div>
                <div className='university'>
                    <h3> Toronto Metropolitan University</h3>
                    <p>Ted Rogers School of Management - Business Technology Management</p>
                    <p>Bachelor of Commerce (BComm)</p>
                    <p>2021 - Present</p>
                </div>
            </div>
        </div>
    )
}

export default Education