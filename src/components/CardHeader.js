import React, { Component } from 'react';

class CardHeader extends Component {
    render () {
        return (
            <div className="Card-Header">
                <img className="Photo " src={this.props.foto} alt="" />
                <div className="User">
                    <h3 className="Name-User">{this.props.name}</h3>
                    <p className="Date">{this.props.date}</p>
                </div>
            </div>);
    }

}

export default CardHeader;