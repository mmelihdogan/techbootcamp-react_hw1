import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Location from './Location'

function Content() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            {/* Projects */}
            <Projects />
            {/* About */}
            <About />
            {/* Contact */}
            <Contact />
            {/* Location */}
            <Location />
        </div>

    )
}

export default Content