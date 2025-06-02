import { StrictMode } from 'react'
import ResumeSection from '../components/Resume.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'

function Resume() {
  return (
    <StrictMode>
      <ResumeSection />
      <Experience />
      <Education />
    </StrictMode>
  );
}

export default Resume;