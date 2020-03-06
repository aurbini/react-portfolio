import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"; 
import selfie from "../assets/selfie.jpg"; 

const About = () => {
  return (  
    <div id="wrapper"> 
      <div id="container" style={{minHeight:"380px", maxWidth:"700px"}} ClassName="container bg-light pt-30">
        <h1 ClassName="border-bottom">About Me</h1>
        <div ClassName="row">  
          <div ClassName="col">
            <img ClassName="img-fluid" id="image"  
              src= { selfie } style={{float: "left", margin: "0px 15px 15px 0px",
              maxHeight: "300px"}} alt="selfie"/> 
            <p ClassName="col-xs-12"> Hello my name is Alex Urbini and I am inspiring to become a web developer. I have experience with HTML, CSS, Javascript and am starting to learn Node.js. I have now worked on several applications and experience collaberating with other people on a repository using Github. Below are links to my Github page, LinkIn, and link to my resume. Please check them out periodically as I update them with new projects. I am still in the beginning phase but I will improve upon my skills and learn new technologies as I continue my journey to becoming a full stack developer!  </p>
            <p><a href="https://github.com/aurbini">My Github Page</a></p><p>
            <a href="https://www.linkedin.com/in/alexandre-urbini-0965aab8/">LinkedIn Profile</a></p>
            <p><a href="https://1drv.ms/w/s!AsOXBKv4KlnzgQUkSguny9PzkxrZ">Resume</a></p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;