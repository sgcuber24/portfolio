/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';
import SkillList from './skillList';

import { useSpring, animated } from 'react-spring';
function Skills(props) {
  const props1 = useSpring({
    config: { duration: 700 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props1} className="xl:flex w-full h-full">
      <div className="xl:h-full xl:w-1/2 flex flex-wrap content-center align-middle pt-24 sm:pt-32 md:pt-40 lg:pt-64 xl:pt-0">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          <span className="text-custom-blue-text">Skills</span> and{' '}
          <span className="text-custom-blue-text">Expertise</span>
        </h1>
        <p className="mt-8 md:mt-16 text-white text-opacity-50 text-md md:text-lg">
          I have always been curious to learn about various technologies and
          frameworks and am constantly learning. But over this period of
          learning, I have had an inclination towards Machine Learning, Deep
          Learning and Flutter Development. Here are some of my skills that I’ve
          picked up and still am picking up over the years. For more details,
          visit my{' '}
          <a
            href="https://resume.creddle.io/resume/657k02y9xfn"
            target="_blank"
            className="text-custom-blue-text underline pointer-events-auto"
          >
            Résumé
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/sriram-g-67487915a"
            target="_blank"
            className="text-custom-blue-text underline pointer-events-auto"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <Link
            to="/contact"
            className="text-custom-blue-text underline pointer-events-auto"
          >
            contact
          </Link>{' '}
          me.
        </p>
      </div>

      <div
        className={
          window.innerHeight < 900 && window.innerWidth >= 1280
            ? 'transform scale-75 sm:scale-100 flex flex-wrap xl:justify-end justify-center xl:w-1/2 py-8 sm:py-16 xl:pt-12'
            : 'transform scale-75 sm:scale-100 flex flex-wrap xl:justify-end content-center justify-center xl:w-1/2 py-8 sm:py-16 xl:pt-12'
        }
      >
        <SkillList />
      </div>
    </animated.div>
  );
}

export default Skills;
