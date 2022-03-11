import React from 'react';
import { Consumer } from '../context';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
function AllBlogs() {
  return (
     <Consumer>
      {(value) => {
        const {blogs} = value;
        return (
          <div className="container text-center my-5">
              <h1 className="font-weight-light py-5">
                All my <span className="text-info">Blogs</span>
              </h1>
            <div className="lead">I share my views on technology in these blogs</div>
            <div className="row my-5 pt-5">        
              { blogs.map((blog,index)=>(
                  <BlogCard key={index} blog={blog}/>
              ))}  
            </div>     
            <div className="my-5" >
              <Link to="/" className="text-dark" >
                <h5 style={{textAlign:'right'}}>
                  See My Blogs
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

export default AllBlogs;
