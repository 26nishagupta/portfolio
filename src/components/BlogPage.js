import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPage(props) {
    const param = useParams();
    return (
			<div className="py-5 my-5">
				<h1>Blog {param.id}</h1> 
			</div>
    );
}
export default BlogPage;