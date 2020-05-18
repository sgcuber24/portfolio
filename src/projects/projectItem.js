/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../css/main.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ProjectItem(props) {
  let project = props.project;
  return (
    <div className="rounded-lg pointer-events-auto relative w-full h-full">
      <img
        src={project['image']}
        alt="Mockup"
        className="object-fill rounded-lg h-full w-full"
      />
      <div
        className="transition duration-300 ease-in-out absolute opacity-0 hover:opacity-100 top-0 right-0 bottom-0 left-0 rounded-lg flex flex-col align-middle content-center justify-center"
        style={{ backgroundColor: '#2F2F2F' }}
      >
        <h1 className="text-white text-xl font-bold text-center">
          {project['title']}
        </h1>
        <p className="text-white text-xs font-bold p-4 text-center">
          {project['description']}
        </p>
        <div className="w-full text-center">
          <a
            href={project['github']}
            target="_blank"
            className="pointer-events-auto text-center w-32 h-8"
          >
            <button className="text-md font-bold text-white outline-none bg-custom-blue-button active:bg-blue-700 hover:bg-blue-500 rounded-md w-32 h-8 tracking-wide">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
