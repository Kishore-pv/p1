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
                <p>Full Stack Web Developer with 1+ years of experience in implementing web applications. Experienced in both front-end and back-end technologies, including Vus.js, HTML, CSS, Javascript, PHP(Laravel), and MySql.</p>
                <p>Experienced in creating responsive and user-friendly interfaces, optimizing website performance, and ensuring compatibility across various browsers.</p>
                <p>Committed to continuous learning, constantly trying to get the grasp of latest technologies and trends. Proven track record of collaborating effectively with cross-functional teams to deliver high-quality solutions that meet business requirements. Posses strong problem solving skills, attention to details, and a passion for developing clean, maintainable and efficient code.</p>
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