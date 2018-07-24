import React, { Component } from 'react';
import logo from './images/logo.svg';
import photo from './images/0014816765.jpg';
import './stylesheets/App.css';

class App extends Component {
  render() {
    const header = (<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Hello World!</h1>
    </header>);

    const cardHeader = (
      <div className="Card-Header">
        <img className="Photo " src={photo} alt="" />
        <div className="User">
          <h3 className="Name-User">Alex Guerrero</h3>
          <p className="Date">Lunes 26 de junio de 2018</p>
        </div>
      </div>
    );

    const parrafo = (
      <p className="Parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum hic aut aliquam distinctio porro. Fuga vero nihil, ducimus cumque voluptatibus
             mollitia dolor quaerat, voluptas non necessitatibus neque, corporis esse harum. 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odio velit? Vero 
             laboriosam, temporibus possimus est cum nihil deleniti, dolorum similique 
             excepturi numquam, quidem ex ducimus laborum. Quos, reprehenderit corrupti!</p>
    );

    const cardFooter = (
      <div className="Card-Footer">
        <a className="Leer" href="">Leer más...</a>
        <p className="numero">37 <i class="fas fa-heart"></i></p>
      </div>
    );

    const appRoot = (
      <div className="App">
        {header}
        <div>
          <div className="Card">
            {cardHeader}
            {parrafo}
            {cardFooter}
          </div>
        </div>
      </div>
    );
    return appRoot;
  }
}

export default App;
