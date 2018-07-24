import React, { Component } from 'react';



class CardFooter extends Component {
    render () {
        let heartClass = "fas fa-heart";
        if (this.props.heartType === false) {
            heartClass = "far fa-heart"
        }
        return (
            <div className="Card-Footer">
                <a className="Leer" href="">Leer más...</a>
                <p className="numero">{this.props.likes} <i className={heartClass}></i></p>
            </div>
        );
    }
}
//Ejercicio 2

export default CardFooter;