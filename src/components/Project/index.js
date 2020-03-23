import React from 'react';
import WeatherDash from "../../assets/WeatherDash.png"; 
import Budget from "../../assets/budget.png"; 
import Recycle from "../../assets/Recycle.png";
import Ramen from "../../assets/ramen.png"

const data = [
    {
   name: "Budget", 
   image: Budget, 
   src: "https://young-cliffs-73102.herokuapp.com/",
   git: "https://github.com/aurbini/offline-budget"
    },  {
   name: "Recycle", 
   image: Recycle, 
   src: "https://intense-thicket-33780.herokuapp.com/",
   git: "https://github.com/chriscrichter/ProjectTwo"
    },  {
   name: "RamenJoy", 
   image: Ramen, 
   src: "https://onedrive.live.com/edit.aspx?action=edit&resid=F3592AF8AB0497C3!137&ithint=file%2cdocx&wdNewAndOpenCt=1584924286670&wdPreviousSession=575883a5-96b0-4187-a3ed-a54715ee38d8&wdOrigin=OFFICECOM-WEB.START.UPLOAD",
   git: "https://github.com/jujubrains/ramen-joy"
    },  {
    name: "WeatherDash", 
    image: WeatherDash, 
    src: "https://aurbini.github.io/homework-6/",
    git: "https://github.com/aurbini/homework-6"
    }
]


const Project = () => {
  return ( 
   <div className="mb-10">
       <div className="row mb-10">
       {
           data.map(project =>(
               <div className="col-xs-12 col-md-6 mb-3 mt-3">
                    <a href={project.src}>
                        <div className="card bg-dark d-flex text-white">
                            <img className="card-img port-pic" src={project.image} />
                            <div className="banner-color card-img-overlay d-flex flex-column">
                                <div className="rowbanner mt-auto text-center align-middle bg-dark">
                                    <div className="col">
                                        <span className="banner-text text-center align-middle">{project.name}</span>
                                        <br></br>
                                        <a className="bannter-text text-center align-middle" href={project.git}>Github Page</a>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </a>
                </div>                    
           ))
       }
       </div>
   </div>
  );
}
 
export default Project;

