import React from 'react';
// import image1 from "../assets/html5.png";
// import image2 from "../assets/css3.png";
// import image3 from "../assets/javascript.png";
// import image4 from "../assets/bootstrap4.png";
// import image5 from "../assets/react.png";
// import image6 from "../assets/mysql.png";
// import image7 from "../assets/python.png";
// import image8 from "../assets/flask.png";

import { v4 as uuid } from "uuid";

function Skill(props) {
    const { name , imageUrl, starsTotal, starsActive } = props.skill;
    const starsList = [];
    for(let i = 0; i < starsTotal; i++){
      if (i < starsActive){
        starsList.push(<span key={uuid()} className="text-info">★</span>);
      }else{
        starsList.push(<span key={uuid()}>★</span>);
      }
    }
    return (
        <div>
        <img 
          className="rounded-circle" 
          src={imageUrl} 
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <div>{starsList}</div>       
      </div>
    );
}
export default Skill;