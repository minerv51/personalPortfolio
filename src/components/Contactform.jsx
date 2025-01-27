import { useState } from 'react';
import '../styles/Contactform.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNum: '',
        company: '',
        reason: 'placeholder',
        referral: 'referralPlace',
        message: '',
        consent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

            // Replace these with your actual IDs from EmailJS
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
            console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
            console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


            emailjs
                .send(
                    serviceID, // Service ID
                    templateID, // Template ID
                    formData,   // Form data to send
                    publicKey   // Public Key
                )
                .then(
                    (result) => {
                        console.log('Email successfully sent:', result.text);
                        alert('Your message has been sent!');
                        setFormData({
                            name: '',
                            email: '',
                            phoneNum: '',
                            company: '',
                            contactMethod: 'Email',
                            reason: 'placeholder',
                            referral: 'referralPlace',
                            message: '',
                            consent: false,
                        });
                    },
                    (error) => {
                        console.error('Failed to send email:', error.text);
                        alert('Failed to send your message. Please try again.');
                    }
                );
        };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            phoneNum: '',
            company: '',
            reason: 'placeholder',
            referral: 'referralPlace',
            message: '',
            consent: false
        });
    };

    return (
        <div className="contactForm">
            <div className="altFormTitle">
                <h1>Get In Touch</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="client-info-inputs">

                    <h1 id='formTitle'>Get In Touch</h1>

                    <div className='name'>
                        <input required id="name" type="text" name="name" placeholder='Full-Name' value={formData.name} onChange={handleChange} />   
                    </div>

                    <div className='emailPhoneNum'>
                        <input required id="email" type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
                        
                        <input required id="phoneNum" type="number" name="phoneNum" placeholder='Phone Number' value={formData.phoneNum} onChange={handleChange} />
                    </div>

                    <div className='companyName'>
                        <input id="company" type="text" name="company" placeholder='Company' value={formData.company} onChange={handleChange} />
                    </div>

                    <div className='reason'>
                        <select required id="reason" name="reason" placeholder='Reason for Contact' value={formData.reason} onChange={handleChange}>
                            <option value="placeholder">Reason for Contact</option>
                            <option value="inquiry">General Inquiry</option>
                            <option value="job">Job Opportunity</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='referral'>
                        <select required id="referral" name="referral" value={formData.referral} onChange={handleChange}>
                            <option value="referralPlace">How Did You Hear About Me?</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="instagram">Instagram</option>
                            <option value="friend/colleague">Friend/Colleague</option>
                            <option value="search">Search Engine</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className='message'>
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Have A Question? Get In Touch!"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="consent-button">
                        <label htmlFor="consent">I agree to be contacted for a follow-up</label>
                        <input required id="consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} />
                    </div>

                    <div className="submit-reset">
                        <input id='submit' type="submit" value="Submit" />
                        <input id='reset' type="button" value="Reset" onClick={handleReset} />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
