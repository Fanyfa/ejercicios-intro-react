import React, { Component } from 'react';
import photo from '../images/0014816765.jpg';
import '../stylesheets/MediaCard.css';
import MediaList from './MediaList';
import CardHeader from './CardHeader';
import Paragraph from './Paragraph';
import CardFooter from './CardFooter';

class MediaCard extends Component {
  render() {
      const day = 'Lunes no se qué de junio';
      const texto = 'Lorem ipsum dolor sit amet consectetur adipisicing eliEarum hic aut aliquam distinctio porro. Fuga vero nihil, ducimus cumque voluptatibus mollitia dolor quaerat, voluptas non necessitatibus neque, corporis esse harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, odio velit? Vero laboriosam, temporibus possimus est cum nihil deleniti, dolorum similique excepturi numquam, quidem ex ducimus laborum. Quos, reprehenderit corrupti!';

    const appRoot = (
          <div className="Card">
            <CardHeader foto={photo} name={this.props.name} date={day}/>
            <Paragraph parrafo={texto} />
            <CardFooter likes='37' heartType={this.props.corazon}/>
          </div>

    );
    return appRoot;
  }
}

export default MediaCard;