import React from 'react';
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { id, title , excerpt , imageUrl } = props.project;
  return (
    <div className="card-shadow h-100 col-md-4 col-xs-12">
      <Link to={`/project/${id}`} className="stretched-link" >
        <img className="card-img-top" src={imageUrl} alt={title} />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          {title}
        </h4>
        <p className="card-text">{excerpt}</p>                
      </div>
    </div>
  );
}
export default ProjectCard;
