import React from "react";
import dummy_image from "../assets/dummy_image.png";
import PropTypes from "prop-types";

function Title(props){
    // const name = "Nisha Gupta";
    // const leadText = "I am Freelancer from India";
    //console.log(props);
    const { name , leadText } = props;
    return (
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
            <div className="col-12 col-md-6">
                <img 
                className="img-fluid rounded-circle w-75" 
                src={dummy_image}
                alt="Nisha Gupta"
                />

            </div>
            <div className="col-12 col-md-6 pt-5">
              <div className="font-weight-light" style={{ fontSize: "50px" }}>
                Hi, I am <span className="text-info">{ name }</span>
              </div>
              <h4 className="font-weight-light">{ leadText }</h4>
            </div>
        </div>
    </div>
    
    );
}

//default props

Title.defaultProps = {
  name: "Nisha Gupta",
  leadText: "I am Freelancer from India",
};
Title.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Title;