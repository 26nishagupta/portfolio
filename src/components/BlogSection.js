import React from 'react';
import BlogCard from './BlogCard';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';

function BlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="container text-center my-5">
          <h1 className="font-weight-light">
            My <span className="text-info">blogs</span>
          </h1>
          <div className="lead">I share my views on technology in these blogs</div>
          <div className="row my-5 pt-5">        
            {blogs.slice(0,3).map((blog,index)=>(
                <BlogCard key={index} blog={blog} />
            ))}  
          </div>     
          <div className="my-5">
            <Link to="/allblogs" className="text-dark">
              <h5  style={{textAlign:'right'}}>
                See My blogs
                &nbsp;<i className="fa fa-arrow-right"></i>
              </h5>
            </Link>
          </div>
        </div>
      );
      }}
    </Consumer>
  );
}

export default BlogSection
