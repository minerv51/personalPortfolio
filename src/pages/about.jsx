import { StrictMode } from 'react'
import Introduction from '../components/Intro.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import MySkills2 from '../components/MySkills2.0.jsx'
import MySkills3 from '../components/MySkills3.0.jsx'

function About() {
  return (
    <StrictMode>
      <Introduction />
      <MySkills2/>
      <Experience />
      <Education />
    </StrictMode>
  );
}

export default About;