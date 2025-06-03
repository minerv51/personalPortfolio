import '../styles/Experience.css'

function Experience() {

    const experiences = [
        {
            company: "OmniActus",
            role: "CEO | Founder",
            type: "Self-Employed",
            period: "April 2025 - Present",
            description: "OmniActus is a technology solutions company I founded to help small businesses and professionals make a real impact online. Through OmniActus, I have gained hands-on experience across web development, branding, cloud solutions, client communications, and project management. My work has included designing and building modern websites, developing digital tools, and advising clients on technology strategies to improve their operations and online presence. I am proud to lead projects that drive innovation, streamline workflows, and help clients achieve their business goals in today’s digital landscape."
        },
        {
            company: "L. Minervini Professional Corporation",
            role: "Administrative Assistant & Law Clerk",
            type: "Permanent Part-Time",
            period: "March 2017 - Present",
            description: `L. Minervini Professional Corporation is a family-owned business
                where I have gained over 8 years of valuable experience.
                During my time here, I have contributed to various aspects of the
                business including accounting, marketing, branding, communications, 
                information technology, and law. My work has improved overall efficiency, 
                streamlined operations, and elevated our overall brand image.`
        },
        {
            company: "Delta Dawn",
            role: "On-Set Photographer",
            type: "Contract",
            period: "February 2025",
            description: "Delta Dawn is a short film that I worked on as an on-set photographer. My role involved capturing high-quality images during the filming process, which were used for set materials and behind-the-scenes content. This experience allowed me to apply my photography skills in a professional film setting and collaborate with a talented team of filmmakers."
        },
        
        {
            company: "Natural Visions Landscaping",
            role: "CEO | Founder",
            type: "Self-Employed",
            period: "May 2022 - September 2024",
            description: `Natural Visions Landscaping was the first business I have owned and founded. Through this venture I
                have gained knowledge and experience on all fronts of business operations such as marketing, branding, sales, accounting,
                leadership, and money management. I received a $3,000 grant from the City of Vaughan as a sole proprietor for the purpose of
                gaining startup capital.`
        },
        {
            company: "VividShots Imaging",
            role: "CEO | Founder",
            type: "Self-Employed",
            period: "November 2023 - February 2024",
            description: `VividShots Imaging was a business I founded as I was pushing myself to increase my knowledge and network. This company
                specialized in real estate photography and was a way for me to not only increase my business experience but to also increase
                my connections with other business owners and real estate agents in my area as I worked in commercial real estate photography.
                Through this venture I refined my photography, photoshop, lightroom, and design skills as my creativity was put to the test in order
                to capture high quality real estate images for clients.`
        },
        {
            company: "Alarm Guard Security Services Inc.",
            role: "Sales & Account Representative",
            type: "Internship",
            period: "October 2023 - December 2023",
            description: `While working for Alarm Guard as a Sales & Account Representative I conducted direct client acquisition as well as
                cultivating and managing relationships with clients across Toronto. This role honed my ability to manage client accounts
                effectively, build beneficial relationships with prospective clients, and turn those prospects into sales.`
        },
        {
            company: "T & F Sales",
            role: "Product Merchandiser",
            type: "Permanent Part-Time",
            period: "November 2022 - April 2023",
            description: `At T & F Sales, I gained B2B experience as a product merchandiser, introducing
                a new understnading of supplier-retailer relationships and strong communication strategies
                that would maximize sales. This role strenghted my communication skills, expanded my network,
                and gave me a first-hand experience into the management operations of various department
                stores across Ontario.`
        }
    ];

    return (
        <div className='experience'>
            <h1>My Experience</h1>
            <div className='experienceContainer'>
                {experiences.map((exp, idx) => (
                    <div className='experienceItem' key={idx}>
                        <h2>{exp.company}</h2>
                        <h3>{exp.role}</h3>
                        <h4>{exp.type}</h4>
                        <h4>{exp.period}</h4>
                        <p>{exp.description}</p>
                        {idx < experiences.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience