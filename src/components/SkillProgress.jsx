import PropTypes from 'prop-types';

const SkillProgress = ({ skill, level }) => {
    //Create the effect of a progress bar by having one div fill another div to a certain level
    return (
        <div>
            <h4>{skill}</h4>
            <div style={{ backgroundColor: '#ddd', borderRadius: '5px', overflow: 'hidden', height: '20px', width: '100%' }}>
                <div
                    style={{
                        width: `${level}%`,
                        backgroundColor: '#1B2A41',
                        height: '100%',
                        textAlign: 'center',
                        color: 'white',
                        borderRadius: '5px',
                        lineHeight: '20px',
                        transition: 'width 0.5s ease-in-out',
                    }}
                >
                    {level}%
                </div>
            </div>
        </div>
    );
};

// Define prop types
SkillProgress.propTypes = {
    skill: PropTypes.string.isRequired, // `skill` should be a string and is required
    level: PropTypes.number.isRequired, // `level` should be a number and is required
};

export default SkillProgress;
