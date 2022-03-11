import React from 'react';
//install react router dom - npm install react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import WriteRecommendation from './components/WriteRecommendation'
import ProjectPage from './components/ProjectPage'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import AddBlog from './components/AddBlog';
import { Provider } from './context';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';

const Routing = () => {
  return (
  <Provider>
    <BrowserRouter>
      < Navbar /> 
        <Routes>
          <Route exact path="/" >
            <Route index element={<Home />} />
            <Route exact path="/contact" element={< Contact />} />
            <Route exact path="/write-a-recommendation" element={< WriteRecommendation />}/>
            <Route exact path="/allprojects" element={<AllProjects />}/>
            <Route exact path="/allblogs" element={<AllBlogs />}/>           
            <Route exact path="/project/add" element={<AddProject />} />
            <Route exact path="/blog/add" element={<AddBlog />} /> 
            <Route exact path="/project/:id" element={<ProjectPage />} />
            <Route exact path="/blog/:id" element={<BlogPage />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      < Footer />
    </BrowserRouter>
  </Provider>
 
  )
}

export default Routing
