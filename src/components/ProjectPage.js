import React from 'react';
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";
import { useParams } from 'react-router-dom';
import { Consumer } from '../context';
import ReactMarkdown from 'react-markdown';

function ProjectPage(props) {
    const param = useParams();
    return (
			<Consumer>
				{(value)=>{
					const {projects} = value;
					const id = param.id;
					const project = projects.filter((project) => project.id == id)[0];
					return(
						<div className='my-5 py-5'>
								<div className="container py-5 my-5 markdown">
								<div className="justify-content-center">
									<img src={project.imageUrl} alt={project.title} />
								</div>                
								<h1 className="font-weight-light text-center my-5">{project.title}</h1>
								<ReactMarkdown source={project.body} />
							</div>
						</div>
					)
				}}
			</Consumer>
	);
}
export default ProjectPage;