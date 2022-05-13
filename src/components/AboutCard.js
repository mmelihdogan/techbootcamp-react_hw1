import React from 'react'

function AboutCard(props) {
    return (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={props.image} alt={props.name} style={{ width: "100%" }} />
            <h3>{props.name}</h3>
            <p className="w3-opacity">{props.title}</p>
            <p>
                {props.about}            </p>
            <p>
                <button className="w3-button w3-light-grey w3-block">Contact</button>
            </p>
        </div>
    )
}

export default AboutCard