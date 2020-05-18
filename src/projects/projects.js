/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
import { useSpring, animated } from 'react-spring';
import ProjectList from './projectList';
function Projects() {
  const props = useSpring({
    config: { duration: 700 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div
      style={props}
      className="h-full w-full flex flex-col mt-16 sm:mt-24 lg:mt-32"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-custom-blue-text tracking-wide">
        Projects
      </h1>
      <div className="pointer-events-auto mt-16 mb-12">
        <ProjectList></ProjectList>
      </div>
    </animated.div>
  );
}

export default Projects;
