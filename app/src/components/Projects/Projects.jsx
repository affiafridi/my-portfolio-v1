import React from 'react'
import ProjectCard from './ProjectCard';
import { projects } from "../../pages/projectData";


function Projects() {
    const projectCard = projects.map((project, index) => {
        <ProjectCard key={index} project={project}/>
    })

  return (
    <>
        {projectCard}
    </>
  )
}

export default Projects