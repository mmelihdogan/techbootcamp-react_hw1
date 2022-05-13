import React from 'react'
import About from './About'
import Projects from './Projects'

function Content() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            {/* Projects */}
            <Projects />
            {/* About */}
            <About />
            {/* Contact */}
            {/* Location */}
        </div>

    )
}

export default Content