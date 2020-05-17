/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';
function Skills(props) {
  return (
    <div className="flex w-full h-full">
      <div className="h-full lg:w-1/2 flex flex-wrap content-center align-middle bg-black14">
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
            className="text-custom-blue-text underline"
          >
            Résumé
          </a>
          ,{' '}
          <a
            href="https://www.linkedin.com/in/sriram-g-67487915a"
            target="_blank"
            className="text-custom-blue-text underline"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <Link to="/contact" className="text-custom-blue-text underline">
            contact
          </Link>{' '}
          me.
        </p>
      </div>
    </div>
  );
}

export default Skills;
