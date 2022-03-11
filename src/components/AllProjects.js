import React from 'react';
import { Consumer } from '../context';
import ProjectCard from './ProjectCard';

function AllProjects() {
  return (
     <Consumer>
      {(value) => {
        const {projects} = value;
        return (
          <div className="container text-center my-5">
              <h1 className="font-weight-light py-5">
                All my <span className="text-info">Projects</span>
              </h1>
            <div className="lead">I build products, just like this website</div>
            <div className="row my-5 pt-5">        
              { projects.map((project,index)=>(
                  <ProjectCard key={index} project={project}/>
              ))}  
            </div>     
            <div className="my-5" >
              <a href="/" className="text-dark" >
                <h5 style={{textAlign:'right'}}>
                  See My Projects
                  &nbsp;<i className="fa fa-arrow-right "></i>
                </h5>
              </a>
            </div>
          </div>
        );
      }}
     </Consumer>
  );
}

export default AllProjects;
