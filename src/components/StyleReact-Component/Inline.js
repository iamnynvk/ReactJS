import React from 'react'

const headingStyle = {
    color:'blue',
    fontSize:"70px"
}

function Inline() {
    return (
        <div>
            <h1 style={headingStyle}>Heading</h1>
        </div>
    )
}

export default Inline;