import React from 'react';
import RecommendationSection from './RecommendationSection';
import "../App.css";
import SkillsSection from './SkillsSection';
import Title from './Title';
import ProjectSection from './ProjectSection';
import About from './About';
import BlogSection from './BlogSection';


const Home = () => {
    return (
        <div>
        < Title />
          < RecommendationSection />
          < SkillsSection />
          < ProjectSection />
          < About />
          < BlogSection />
        </div>
    );
}

export default Home
