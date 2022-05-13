import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

    let projects = [
        { name: "Summer House", image: "https://www.w3schools.com/w3images/house5.jpg" },
        { name: "Brick House", image: "https://www.w3schools.com/w3images/house2.jpg" },
        { name: "Renovated", image: "https://www.w3schools.com/w3images/house3.jpg" },
        { name: "Barn House", image: "https://www.w3schools.com/w3images/house4.jpg" },
        { name: "Summer House", image: "https://www.w3schools.com/w3images/house5.jpg" },
        { name: "Brick House", image: "https://www.w3schools.com/w3images/house2.jpg" },
        { name: "Renovated", image: "https://www.w3schools.com/w3images/house3.jpg" },
        { name: "Barn House", image: "https://www.w3schools.com/w3images/house4.jpg" }
    ]

    return (
        <>
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    Projects
                </h3>
            </div>

            <div className="w3-row-padding">
                {projects.map(project => (
                    <ProjectCard name={project.name} image={project.image} />
                ))}
            </div>
        </>

    )
}

export default Projects