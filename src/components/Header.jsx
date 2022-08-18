import React from 'react'
import PropTypes from 'prop-types'

Header.defaultProps = {
    text: 'Feedback UI',
    bgClor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgClor: PropTypes.string,
    textColor: PropTypes.string
}


export default function Header({ text, bgColor, textColor }) {
    const HeaderStyles = {
        backgroundColor: bgColor, color: textColor
    }

    return (
        <header style={HeaderStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}