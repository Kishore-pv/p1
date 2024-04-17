// import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
// import './index.scss';
// import AnimatedLetters from '../AnimatedLetters';
// import { useEffect, useState } from 'react';

// const Home = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
//     const nameArray = ['i', 's', 'h', 'o', 'r', 'e']
//     const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

//     useEffect(() =>{
//         return setTimeout(() => {
//             setLetterClass('text-animate-hover')
//         }, 4000)
//     }, [])
    

//     return [
//         <div className="container home-page">
//             <div className="text-zone">
//                 <h1>
//                     <span className={letterClass}>H</span>
//                     <span className={`${letterClass} _12`}>i,</span>
//                     <br />
//                     <span className={`${letterClass} _13`}>I</span>
//                     <span className={`${letterClass} _14`}>'m</span>
//                     <img src={LogoTitle} alt="developer" />
//                     <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
//                     <br />
//                     <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21}/>
//                 </h1>
//                 <h2>Full Stack Web Developer</h2>
//                 <Link to="/contact" className='flat-button'>CONTACT ME</Link>
//             </div>
//         </div>
//     ];
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png';
import Lottie from "lottie-react";
import ani from '../../assets/logo/nV8nHHrN8v.json'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['i', 's', 'h', 'o', 'r', 'e'];
  const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timerId); // Cleanup the timer
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>{' '}
          {/* <img src={LogoTitle} alt="developer" /> */}
          <Lottie animationData={ani} loop={true} style={{ display: 'inline-block', verticalAlign: 'bottom', width: '70px', height: '80px' }}/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} className="text-name" />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
        </h1>
        <h2>Full Stack Web Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
