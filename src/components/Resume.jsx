import '../styles/Resume.css'

function ResumeSection () {

    return (
        <div className='resumeSection'>
            <div className='resumeTitle'>
                <h1>My Resume</h1>
                <p>Below, you can view an online copy of my resume and download a PDF version using the button at the bottom of the page.</p>
            </div>
            <div className='resumeFile'>
                <iframe className='iframe' 
                    src='https://drive.google.com/file/d/19kb1A0r1I2q1LPyXti91PW5b2eyCAoPOnT4sRiB36mI/preview'
                    title='Resume Preview'
                />
            </div>
            <div className='resumeDownload'>
                <a href='/personalPortfolio/resume_school.pdf' download='baminervino-resume.pdf'>
                    <button id='downloadButton'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ResumeSection