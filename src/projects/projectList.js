import React from 'react';
import '../css/main.css';
import projectData from './projectData';
import ProjectItem from './projectItem';
function ProjectList(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {projectData.map((project) => (
        <div>
          <ProjectItem project={project}></ProjectItem>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
