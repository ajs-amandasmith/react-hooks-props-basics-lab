import React from "react";
import Links from "./Links";



function About(props) {
  const IfBio = () => {
    if (props.bio === '' || props.bio === undefined) { 
      return null;
    } else  {
      return <p>{props.bio}</p>;
    }
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      <IfBio />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;