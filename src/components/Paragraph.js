import React, { Component } from 'react';

class Paragraph extends Component {
    render () {
        return (
            <p className="Parrafo">{this.props.parrafo}</p>

        );
    }
}

export default Paragraph;