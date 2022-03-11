import React from 'react';
import ProjectCard from './ProjectCard';
import {Consumer} from "../context";
import { Link } from "react-router-dom";;
// import image1 from "../assets/free-stock-image-1.jpg";
// import image2 from "../assets/free-stock-image-2.jpg";
// import image3 from "../assets/free-stock-image-3.jpg";
// import dummy_image from "../assets/dummy_image.png";



function ProjectSection() {
  return(
    <Consumer>
    {(value) => {
      const {projects} = value; //Destructure
      // Destucture - You have multiple's item but you are getting some of them.
      return (
        <div className="container text-center my-5">
        <h1 className="font-weight-light">
          My <span className="text-info">Projects</span>
        </h1>
        <div className="lead">I build products, just like this website</div>
        <div className="row my-5 pt-5">        
          { projects.slice(0,3).map((project,index)=>(
              <ProjectCard key={index} project={project} />
          ))}  
        </div>     
        <div className="my-5">
          <Link to="/allprojects" className="text-dark" >
            <h5 style={{textAlign:'right'}}>
              See My Projects
              &nbsp;<i className="fa fa-arrow-right "></i>
            </h5>
          </Link>
        </div>
      </div>
      );
    }}
  </Consumer>
  );    
}
export default ProjectSection;

