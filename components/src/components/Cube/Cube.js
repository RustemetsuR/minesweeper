import React from 'react';
import './Cube.css'

const Cube = ({find}) => {
    return (
        <div className="cube" onClick={find}></div>
    )
}

export default Cube;