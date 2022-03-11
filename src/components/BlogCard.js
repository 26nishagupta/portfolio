import React from 'react';
import { Link } from "react-router-dom";

function BlogCard(props) {
    const { id, title, imageUrl, excerpts } = props.blog;
    return (
      <div className="card-shadow h-100 col-md-4 col-xs-12">
        <Link to={`/blog/${id}`} className="stretched-link" >
          <img className="card-img-top" src={imageUrl} alt={title} />
        </Link>
          {/* <img className="card-img-top" src={imageUrl} alt={title} /> */}
        <div className="card-body">
          <h4 className="card-title">
            {title}
          </h4>
          <p className="card-text">{excerpts}</p>
      </div>
      </div>
    );
}

export default BlogCard;
