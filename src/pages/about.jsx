import { StrictMode } from 'react'
import Introduction from '../components/Intro.jsx'
import Introduction2 from '../components/Intro2.jsx'
import Education from '../components/Education.jsx'
import Experience from '../components/Experience.jsx'
import MySkills2 from '../components/MySkills2.0.jsx'

function About() {
  return (
    <StrictMode>
      <Introduction2 />
      <MySkills2/>
      <Experience />
      <Education />
    </StrictMode>
  );
}

export default About;