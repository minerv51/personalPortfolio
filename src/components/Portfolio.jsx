import { useState } from "react";
import '../styles/Portfolio.css'
import portrait from '../assets/IMG_2663_transparent.png'
import clockwork from '../assets/Clockwork.png'
import { Link } from 'react-router-dom';

function Portfolio () {
    const [activeTab, setActiveTab] = useState("coding");

    const [linkText, setLinkText] = useState("Visit Site");

    const changeText = () => {
        setLinkText("You're Already Here!")
    };

    const professionalImages = [
        { src: "professional1.jpg", alt: "A professionally done side profile picture of a man with a clean appearance, wearing a black collared shirt, he is looking to the left, with a white background."},
        { src: "professional2.jpg", alt: "A professionally done portrait of a man dressed in a black suit, and shirt, slightly smiling at the camera."},
        { src: "professional3.jpg", alt: "A professionally done headshot of a mean dressed in a black suit, and white shirt, slightly smiling at the camera."},
    ];

    const creativeImages = [
        {src: "creative1.jpg", alt: "A vibrant yellow sunflower, standing under a bright sky with scattered clouds."},
        {src: "creative2.jpg", alt: "A marsh with a calm body of water covered in floating lily pads, surrounded by grass and a forest."},
        {src: "creative3.jpg", alt: "A close-up view of the Eiffel Tower against a backdrop of a clear sky and the sunset."},
        {src: "creative4.jpg", alt: "A woman with curly dark hair, dressed in a lace top, standing in front of a statue surrounded by greenery."},
        {src: "creative5.jpg", alt: "A street performed holds a torch in his outstretched hand, while the crowd behind him is amused."},
        {src: "creative6.jpg", alt: "A dining room with arched windows offering a scenic view of the Italian countryside, the room contains white tablecloths and chairs."},
        {src: "creative7.jpg", alt: "A soccer field surrounded by trees with bright fall leaves in various shades of orange, red, and yellow."},
        {src: "creative8.jpg", alt: "An ancient Roman courtyard in Pompeii with a row of weathered stone columns and a clear sky in the background."},
        {src: "creative9.jpg", alt: "A small chipmunk on a moss covered rock, inside of a forest."}
    ]

    return (
        <div className='portfolio'>

            <div className="portfolioTabs">
                <button 
                className="tabButton"
                aria-selected={activeTab === "coding"}
                onClick={() => setActiveTab("coding")}
                >
                    Coding
                </button>
                <button 
                className="tabButton"
                aria-selected={activeTab === "photography"}
                onClick={() => setActiveTab("photography")}
                >
                    Photography
                </button>
                <button 
                className="tabButton"
                aria-selected={activeTab === "other"}
                onClick={() => setActiveTab("other")}
                >
                    Other
                </button>
            </div>

            <div className="portfolioContent">
                {activeTab === "coding" && (
                    <div>

                        <div className="codingCards">
                            <div className="siteCard">
                                <h3>Personal Portfolio Website</h3>
                                <img
                                    src={portrait}
                                    id="portfolioLogo"
                                    alt="A portrait of a man with slicked back dark hair, a trimmed beard, wearing a light blue-green shirt with a transparent bacground."
                                ></img>

                                <Link 
                                    to="/portfolioSiteInfo" 
                                    role='button' 
                                    className="visitSiteButton"
                                >
                                    Learn More
                                </Link>

                            </div>
                            <div className="siteCard">
                                <h3>Clockwork Web App</h3>
                                <img
                                    src={clockwork}
                                    id="clockworkLogo"
                                    alt="A logo of a green clock, with the hour hand pointing to 12 and the minute hand pointing to 8"
                                ></img>

                                <Link
                                    to="/clockworkSiteInfo"
                                    role='button'
                                    className="visitSiteButton"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "photography" && (
                    <div className="photographyCards">
                        <div className="professionalPortraits">
                            <h2>Professional Portraits</h2>
                            <div className="professionalGallery">
                                {professionalImages.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="thumbnail"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="professionalPortraits">
                            <h2>Creative Photography</h2>
                            <div className="professionalGallery">
                                {creativeImages.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="thumbnail"
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === "other" && (
                    <div className="otherCards">
                        <h3>Other Projects</h3>
                        <p>Other Projects Are Coming Soon!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio