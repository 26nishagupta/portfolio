import React, { Component } from "react";
import image1 from "./assets/html5.png";
import image2 from "./assets/css3.png";
import image3 from "./assets/javascript.png";
import image4 from "./assets/bootstrap4.png";
import image5 from "./assets/react.png";
import image6 from "./assets/mysql.png";
import image7 from "./assets/python.png";
import image8 from "./assets/flask.png";
import img1 from "./assets/free-stock-image-1.jpg";
import img2 from "./assets/free-stock-image-2.jpg";
import img3 from "./assets/free-stock-image-3.jpg";

import immg1 from "./assets/free-stock-image-1.jpg";
import immg2 from "./assets/free-stock-image-2.jpg";
import immg3 from "./assets/free-stock-image-3.jpg";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch(action){
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
        default:
        break;
    }
  };
  state = {
    handler: this.handler,
    blogs : [
      {
          id: 1,
          title: "blog 1",
          imageUrl: img1,
        excerpts: "This is my blog about.....",
      },        
      {
          id: 2,
          title: "blog 2",
          imageUrl: img2,
          excerpts: "This is my blog about.....",
      },
      {
          id: 3,
          title: "blog 3",
          imageUrl: img3,
          excerpts: "This is my blog about.....",
      },  
  ],
    recommendations : [
      {
          id: 1,
          name: "Random Guy 1",
          company: "ABC Company",
          designation: "CEO",
          message: "He is good engineer",
      },
      {
          id: 2,
          name: "Random Guy 2",
          company: "ABC Company",
          designation: "Director",
          message: "He is lazy person",
      },
      {
          id: 3,
          name: "Random Guy 3",
          company: "ABC Company",
          designation: "Manager",
          message: "He is excellent developer",
      },
      {
          id: 4,
          name: "Random Guy 4",
          company: "ABC Company",
          designation: "SDE",
          message: "He gets things done so quickly",
      },
  ],
    
   skills: [
      {
          id: 1,
          name: "HTML5",
          imageUrl: image1,
          starsTotal: 3,
          starsActive: 1,
      },
      {
          id: 2,
          name: "CSS3",
          imageUrl: image2,
          starsTotal: 3,
          starsActive: 3,
      },
      {
          id: 3,
          name: "javascript",
          imageUrl: image3,
          starsTotal: 3,
          starsActive: 2,
      },
      {
          id: 4,
          name: "Bootstrap 4",
          imageUrl: image4,
          starsTotal: 3,
          starsActive: 1,
      },
      {
          id: 5,
          name: "React",
          imageUrl: image5,
          starsTotal: 3,
          starsActive: 3,
      },
      {
          id: 6,
          name: "MySQL",
          imageUrl: image6,
          starsTotal: 3,
          starsActive: 2,
      },
      {
          id: 7,
          name: "python",
          imageUrl: image7,
          starsTotal: 3,
          starsActive: 1,
      },
      {
          id: 8,
          name: "Flask",
          imageUrl: image8,
          starsTotal: 3,
          starsActive: 2,
      },
      
  ],
    projects: [
      {
        id: 1,
        title: "project 1",
        imageUrl:  immg1,
        excerpt: "This is my project about.....",
        body: "Body 1",
      },
      {
        id: 2,
        title: "project 2",
        imageUrl: immg2,
        excerpt: "This is my project about.....",
        body: "Body 2",
      },
      {
        id: 3,
        title: "project 3",
        imageUrl:  immg3,
        excerpt: "This is my project about.....",
        body: "Body 3",
      },
      {
        id: 4,
        title: "project 4",
        imageUrl: immg1,
        excerpt: "This is my project about.....",
        body: "Body 4",
      },
    ],
  }
  render (){
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;