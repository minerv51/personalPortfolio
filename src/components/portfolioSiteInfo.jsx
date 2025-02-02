import '../styles/portfolioSiteInfo.css';
import { SiReact, SiVercel, SiGithub, SiVite, SiNpm, SiFigma } from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoVisualStudio } from "react-icons/bi";

// Your component code here

function portfolioSiteInfo () {


    return (
        <div className = 'portfolioSiteInfo'>
            <div id='titleBlock'>
                <h1 id='pageTitle'>Under the Hood: The Tech Behind My Portfolio</h1>
                <h3 id='pageSubtitle'>Explore the tools, technologies, and processes behind my personal portfolio website</h3>
            </div>
            <div id='githubBlock'>
                <a id='githubLink' href='https://github.com/minerv51/personalPortfolio' target='_blank'>
                    <button className="btnGithub">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                            fill="currentcolor"
                            ></path>
                        </svg>
                        <span>View Code on Github</span>
                        
                    </button>
                </a>
            </div>

            <div className='infoBlock'>
                <h2>Tools & Technologies</h2>
                <div className='techStack'>
                    <div className='techStackSection' id='frontendTech'>
                        <h4>Frontend Technologies</h4>
                        <ul className='techStackList'>
                            <div className='techContainer'>
                                <li className='stackItem'><SiReact size={200} color='#1B2A41' title='React.js' className='icon'/></li>
                                <span className='techText'>
                                    React.js <br/>
                                    <br/>
                                    React, a JavaScript library for building user interfaces, served as the framework for this website's UI.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><FaHtml5 size={200} color='#1B2A41' title='HTML5' className='icon'/></li>
                                <span className='techText'>
                                    HTML <br/>
                                    <br/>
                                    HTML5, the latest version of the HTML standard, was used to structure the content of this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><FaCss3Alt size={200} color='#1B2A41' title='CSS3' className='icon'/></li>
                                <span className='techText'>
                                    CSS <br/>
                                    <br/>
                                    CSS3, the latest version of the CSS standard, was used to style the content of this website.
                                </span>
                            </div>
                        </ul>
                    </div>

                    <div className='techStackSection' id='hostingTech'>
                        <h4>Hosting & Deployment</h4>
                        <ul className='techStackList'>
                            <div className='techContainer'>
                                <li className='stackItem'><SiVercel size={200} color='#1B2A41' title='Vercel' className='icon'/></li>
                                <span className='techText'>
                                    Vercel <br/>
                                    <br/>
                                    Vercel, a cloud platform for static sites and serverless functions, was used to host and deploy this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><SiGithub size={200} color='#1B2A41' title='Github' className='icon'/></li>
                                <span className='techText'>
                                    GitHub <br/>
                                    <br/>
                                    GitHub, a web-based version control platform, was used to store and manage the code for this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="auto"
                                        height="200"
                                        viewBox="-5.728 -8.5 49.639 51"
                                    >
                                        <path
                                        fill="#1B2A41"
                                        d="M32.937 1.554c-3.968-2.48-9.193-1.889-13.852 1.039C14.44-.335 9.213-.925 5.25 1.553c-6.27 3.919-7.032 14.01-1.701 22.54 3.93 6.289 10.074 9.974 15.544 9.906 5.47.068 11.615-3.617 15.545-9.906 5.324-8.53 4.568-18.621-1.701-22.54M6.43 22.292a20.4 20.4 0 0 1-2.46-5.632 16.1 16.1 0 0 1-.534-5.31c.238-3.153 1.521-5.608 3.612-6.914s4.855-1.385 7.8-.217q.661.266 1.312.606a24 24 0 0 0-4.227 5.081c-3.237 5.18-4.224 10.942-3.095 15.537a21 21 0 0 1-2.408-3.151m27.786-5.634a20.5 20.5 0 0 1-2.46 5.632 21 21 0 0 1-2.408 3.158c1.01-4.12.323-9.165-2.153-13.897a.625.625 0 0 0-.895-.243l-7.72 4.823a.63.63 0 0 0-.2.87l1.133 1.811a.63.63 0 0 0 .869.2l5.004-3.126c.162.486.324.971.445 1.457a16.1 16.1 0 0 1 .536 5.303c-.238 3.151-1.522 5.606-3.612 6.914a7.06 7.06 0 0 1-3.579 1.036h-.16a7.05 7.05 0 0 1-3.578-1.036c-2.093-1.308-3.376-3.763-3.614-6.914a16.1 16.1 0 0 1 .534-5.31 21 21 0 0 1 6.444-10.314 16.1 16.1 0 0 1 4.532-2.806c2.936-1.168 5.705-1.09 7.797.217 2.093 1.308 3.375 3.76 3.612 6.914a16.2 16.2 0 0 1-.527 5.311"
                                        ></path>
                                    </svg>
                                </li>
                                <span className='techText'>
                                    GoDaddy <br/>
                                    <br/>
                                    GoDaddy, a domain registrar and web hosting company, was used to purchase the domain for this website.
                                </span>
                            </div>
                        </ul>
                    </div>

                    <div className='techStackSection' id='formHandlingTech'>
                        <h4>Form Handling & APIs</h4>
                        <ul className='techStackList'>
                            <div className='techContainer'>
                                <li className='stackItem'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="emailJSLogo"
                                        viewBox="0 0 510.88 512"
                                    >
                                        <rect
                                        width="240.31"
                                        height="240.31"
                                        x="270.57"
                                        fill="inherit"
                                        rx="24"
                                        ></rect>
                                        <path
                                        fill="inherit"
                                        d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03"
                                        ></path>
                                    </svg>
                                </li>
                                <span className='techText'>
                                    EmailJS <br/>
                                    <br/>
                                    EmailJS, a cloud-based email service, was used to handle the contact form on this website.
                                </span>
                            </div>
                        </ul>
                    </div>

                    <div className='techStackSection' id='developmentTech'>
                        <h4>Development Tools</h4>
                        <ul className='techStackList'>
                            <div className='techContainer'>
                                <li className='stackItem'><SiFigma size={200} color='#1B2A41' title='Figma' className='icon'/></li>
                                <span className='techText'>
                                    Figma <br/>
                                    <br/>
                                    Figma, a design and prototyping tool, was used to create the designs and wireframes for this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><BiLogoVisualStudio size={200} color='#1B2A41' title='VS Code' className='icon'/></li>
                                <span className='techText'>
                                    Visual Studio Code <br/>
                                    <br/>
                                    Visual Studio Code, a source code editor, was used to write and edit the code for this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><SiVite size={200} color='#1B2A41' title='Vite' className='icon'/></li>
                                <span className='techText'>
                                    Vite <br/>
                                    <br/>
                                    Vite, a build tool for modern web development, was used to bundle the code for this website.
                                </span>
                            </div>
                            <div className='techContainer'>
                                <li className='stackItem'><SiNpm size={200} color='#1B2A41' title='npm' className='icon'/></li>
                                <span className='techText'>
                                    npm <br/>
                                    <br/>
                                    npm, a package manager for JavaScript, was used to manage the dependencies for this website.
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default portfolioSiteInfo;