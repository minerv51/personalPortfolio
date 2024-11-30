import { StrictMode } from 'react'
import Introduction from '../components/Intro.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import MySkills from '../components/Myskills.jsx';

function About() {
  return (
    <StrictMode>
      <Introduction />
      <MySkills />
      <Experience />
      <Education />
    </StrictMode>
  );
}

export default About;