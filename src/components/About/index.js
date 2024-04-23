import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000)
    },[])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
                </h1>
                <p>Hope is a profound and multifaceted concept that resonates deeply within the human experience. It is a powerful force that drives individuals to persevere through challenges, to envision a brighter future, and to maintain optimism in the face of adversity.</p>
                <p>One of the most compelling aspects of hope is its universal nature. It transcends cultural, social, and economic boundaries, touching the lives of people from all walks of life. Whether facing personal setbacks, global crises, or societal challenges, hope serves as a beacon of light, guiding individuals and communities toward progress and renewal.</p>
                <p>The essence of hope lies in its ability to instill courage and determination. In times of hardship, hope whispers words of encouragement, reminding us that setbacks are not permanent and that brighter days are ahead.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faLaravel} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About