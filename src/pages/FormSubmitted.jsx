import '../styles/FormSubmitted.css';
import { Link } from 'react-router-dom';

const FormSubmitted = () => {

    return(
        <div className="formSubmitted">
            <div className='successfulSubmitText'>
                <h1>Thank You For Your Submission!</h1>
                <h3>I appreciate you reaching out. I will get back to you as soon as possible.</h3>
            </div>
                <h3 className='backToHomeButton'><Link to="/" role='button'>Back to Home</Link></h3>
        </div>
    )
};

export default FormSubmitted;