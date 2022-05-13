import React from 'react'
import AboutCard from './AboutCard'

function About() {

    let members = [
        { name: "John Doe", image: "	https://www.w3schools.com/w3images/team1.jpg", title: "CEO & Founder", about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." },
        { name: "Jane Doe", image: "	https://www.w3schools.com/w3images/team3.jpg", title: "Architect", about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." },
        { name: "Mike Ross", image: "https://www.w3schools.com/w3images/team2.jpg", title: "Architect", about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." },
        { name: "Dan Star", image: "https://www.w3schools.com/w3images/team4.jpg", title: "Architect", about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." },
    ]

    return (
        <>
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    About
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="w3-row-padding w3-grayscale">
                {members.map(member => (
                    <AboutCard name={member.name} image={member.image} title={member.title} about={member.about} />
                ))}

            </div>
        </>

    )
}

export default About