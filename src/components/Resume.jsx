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
                    src='https://drive.google.com/file/d/1NSTrvCQE1tB7tW77dBftIZVSHUa0J2nR/preview'
                    title='Resume Preview'
                />
            </div>
            <div className='resumeDownload'>
                <a href='/resume.pdf' download='baminervino_resume.pdf'>
                    <button id='downloadButton'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ResumeSection