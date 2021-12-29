import React from 'react'
import Inline from './Inline';
import './myStyle.css';

function StyleSheet(props) {
    const setStyle = props.container ? 'container' : '';
    return (
        <div className={`${setStyle} font-xl`}>
            Stylesheet
        </div>
    )
}

export default StyleSheet;