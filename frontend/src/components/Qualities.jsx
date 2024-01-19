import React from "react";
import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      
      
      <div className="container">
        
        {data[0].ourQualities.map((element) => (
          <div className="card" key={element.id}>
            <h1>Our Branches in</h1>
            <img src={element.image} alt={element.title} />
            <p className="title">{element.title}</p>
            <p className="description">{element.description}</p>

            <p className="location">{element.location}</p>
            <a href={element.locate}>click here</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
