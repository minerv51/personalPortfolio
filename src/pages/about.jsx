import { StrictMode } from 'react'
import Introduction from '../components/Intro.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx';
import Myskills from '../components/Myskills.jsx'

function About() {
  return (
    <StrictMode>
      <Introduction />
      <Myskills />
      <Experience />
      <Education />
    </StrictMode>
  );
}

export default About;