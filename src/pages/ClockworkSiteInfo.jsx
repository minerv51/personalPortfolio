import '../styles/ClockworkSiteInfo.css';
import { Link } from 'react-router-dom';
import { SiReact, SiVercel, SiGithub, SiVite, SiNpm, SiFigma } from 'react-icons/si';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoVisualStudio } from "react-icons/bi";

const ClockworkSiteInfo = () => {

    return(
        <div className='clockworkSiteInfo'>
            <div id='titleBlock'>
                <h1 id='pageTitle'>Gears in Motion: The Tech Behind Clockwork</h1>
                <h3 id='pageSubtitle'>A look at the technologies, tools, and development process behind my digital app, Clockwork.</h3>
            </div>
            <div id='githubBlock'>
                <a id='githubLink' href='https://github.com/minerv51/Digital-Clock' target='_blank'>
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
                                <li className='stackItem'><SiGithub size={200} color='#1B2A41' title='Github' className='icon'/></li>
                                <span className='techText'>
                                    GitHub <br/>
                                    <br/>
                                    GitHub, a web-based version control platform, was used to store and manage the code for this website.
                                </span>
                            </div>
                        </ul>
                    </div>

                    <div className='techStackSection' id='developmentTech'>
                        <h4>Development Tools</h4>
                        <ul className='techStackList'>
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

            <div className='visitAppBlock'>
                <div className='visitAppContainer'>
                    <div className='visitAppTitleBlock'>
                        <h2>Try Clockwork</h2>
                        <h4>Expierence the App for Yourself!</h4>
                    </div>
                    <div className='visitAppInformationBlock'>
                        <p className='listTitle'>🚧 Early Build Notice – Version 1.1.2-Alpha 🚧</p>
                        <p>Clockwork is currently in an early development stage, and as such, you may encounter bugs, incomplete features, or performance issues. Your feedback is invaluable as I continue refining and improving the app.</p>
                    </div>
                    <div className='feedbackInformationBlock'>
                        <p>The in-app feedback feature is currently under-development. To provide feedback on this app, submit a form in the "contact" tab or email me directly at baminervino@hotmail.com</p>
                    </div>
                    <div className='knownIssuesBlock'>
                        <p className='listTitle'>🔧 Known Issues & Limitations</p>
                        <ul className='clockworkInfoList'>
                            <li>⚠️ Clockwork is not yet optimized for mobile devices.</li>
                            <li>⚠️ There are issues with the pomodoro timer sound not playing on Mac</li>
                            <li>⚠️ Some features may not work as intended or may not be fully implemented yet.</li>
                        </ul>
                    </div>
                    <div className='patchNotesBlock'>
                        <p className='listTitle'>💡 Version 1.1.2-Alpha Patch Notes</p>
                        <ul className='clockworkInfoList'>
                            <li>🔧 Fixed a bug where the pomodoro alarm would not play on Windows.</li>
                            <li>🔧 Enhanced desktop optimziation.</li>
                        </ul>
                    </div>
                </div>
                    <Link
                        to="https://minerv51.github.io/Clockwork"
                        role='button'
                        className="visitAppButton"
                        target='_blank'
                    >
                        Clockwork Web Application
                    </Link>
            </div>
        </div>
    )
};

export default ClockworkSiteInfo;