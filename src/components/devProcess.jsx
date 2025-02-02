import '../styles/devProcess.css'
import { Chrono } from "react-chrono"

const devProcess = () => {
  return (
    <div className='devProcess'>
        <h1 id='title'>Development Process</h1>

        <div className='timeline'>
          <Chrono
            items = {[
              {
                cardTitle: "Initial Planning, Researching, and Wireframing",
                cardDetailedText: `During this initial phase, I conducted research on which elements employers preferred to see on Portfolio Websites through surveying. 
                I also planned out the structure and design of the website, considering the target audience, type of content, and the desired user experience. I used Figma and hand drew wireframes and sketches of the website's initial design to help visualize the design and functionality of the website.`,
              },
              {
                cardTitle: "Setting Up Development Environment, Project Structure, and Initial Code",
                cardDetailedText: `I set up my development environment, created a project structure, and started writing the initial code for the website. I used React and styled-components for the front-end development. I also created a simple layout for the website using HTML and CSS, which I will continue to update as I develop the website's features and design.`,
              },
              {
                cardTitle: "Building the foundation of the User Interface",
                cardDetailedText: `I started building the foundation of the User Interface (UI) by creating the main structure and layout of the website. I used CSS Grid and Flexbox to position elements and create a responsive design. I also added some basic styling using CSS and styled-components to make the website look visually appealing and user-friendly.`,
              },
              {
                cardTitle: "Adding Features and Enhancing Functionality",
                cardDetailedText: "After finalizing the user interface, I implemented the functionality for the contact form by integrating it with the EmailJS API. This approach allowed me to bypass the need for a backend to store submissions, ensuring that all messages are sent directly to my email in real-time, streamlining communication without additional server-side complexity."
              },
              {
                cardTitle: "Optimizing Performance & Adaptive Design",
                cardDetailedText: "I optimized the website's performance by implementing lazy loading, eliminating unnecessary code and processes, and fine-tuning resource management to ensure lightning-fast load times. Additionally, I conducted extensive testing across various screen sizes, refining responsiveness to deliver a seamless user experience on all devices."
              },
              {
                cardTitle: "Hosting and Maintenance",
                cardDetailedText: "For deployment, I hosted the website on Vercel, seamlessly integrating it with my GitHub repository, ensuring automatic updates whenever I push new code. This streamlined workflow allows for efficient version control and continuous deployment. Additionally, I used GoDaddy to purchase and manage my custom domain, configuring DNS settings to point to Vercel for a professional and reliable hosting solution."
              }
            ]}
            theme = {{
              primary: "#1B2A41",
              secondary: "#E5E9F0",
              text: "#E5E9F0",
              background: "#E5E9F0",
              borderRadius: 10,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              cardTitleColor: "#1B2A41",
              titleColor: "#1B2A41",
              titleColorActive:"#AC8205"
            }}
            mode = "VERTICAL"
            disableToolbar
          />
        </div>
    </div>
  )
}

export default devProcess