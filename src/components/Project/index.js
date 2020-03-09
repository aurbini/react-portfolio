import React from 'react';
import Password from "../../assets/Password.png";
import TeaCozy from "../../assets/TeaCozy.png";
import WhetherFun from "../../assets/whetherFun.png"; 
import WeatherDash from "../../assets/WeatherDash.png"; 
import Budget from "../../assets/budget.png"; 
import Recycle from "../../assets/Recycle.png";

const data = [
    {
   name: "Budget", 
   image: Budget, 
   src: "https://young-cliffs-73102.herokuapp.com/"
    },  {
   name: "Recycle", 
   image: Recycle, 
   src: "https://intense-thicket-33780.herokuapp.com/"
    },  {
   name: "WhetherFun", 
   image: WhetherFun, 
   src: "https://aurbini.github.io/WhetherFun/"
    },  {
    name: "WeatherDash", 
    image: WeatherDash, 
    src: "https://aurbini.github.io/homework-6/"
    },  {
    name: "Password", 
    image: Password, 
    src: "https://aurbini.github.io/homework-3/"
    },  {
    name: "TeaCozy", 
    image: TeaCozy, 
    src: ""
    }
]


const Project = () => {
  return ( 
   <div>
       <div className="row">
       {
           data.map(project =>(
               <div className="col-xs-12 col-md-6 mb-3 mt-3">
                    <a href={Project.src}>
                        <div className="card bg-dark d-flex text-white">
                            <img className="card-img port-pic" src={project.image}
                                alt="Card image" />
                            <div className="banner-color card-img-overlay d-flex flex-column">
                                <div className="banner mt-auto text-center bg-dark">
                                    <span className="banner-text text-center align-middle">{project.name}</span>
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






// <div id="container" className="container bg-light">
// <div className="col-lg-10 w-90">
//     <h1 className="border-bottom pt-20 mb-10 page-header">Bootstrap</h1>
// </div>
// <div className="row">
//     <div className="col-xs-12 col-md-6 mb-3 mt-3">
//             <a href="https://aurbini.github.io/WhetherFun/">
//             <div className="card bg-dark d-flex text-white">
//               <img className="card-img port-pic" src={Budget}
//                 alt="Card image" />
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner mt-auto text-center bg-dark">
//                         <span className="banner-text text-center align-middle">Budget</span>
//                     </div>
//                 </div>
//             </div>
//             </a>
//         </div>
//         <div className="col-xs-12 col-md-6 mb-3 mt-3">
//             <a href="https://aurbini.github.io/WhetherFun/">
//             <div className="card bg-dark d-flex text-white">
//               <img className="card-img port-pic" src={Recycle}
//                 alt="Card image" />
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner mt-auto text-center bg-dark">
//                         <span className="banner-text text-center align-middle">Recycle</span>
//                     </div>
//                 </div>
//             </div>
//             </a>
//         </div>
//         <div className="col-xs-12 col-md-6 mb-3 mt-3">
//             <a href="https://aurbini.github.io/WhetherFun/">
//             <div className="card bg-dark d-flex text-white">
//               <img className="card-img port-pic" src={WhetherFun}
//                 alt="Card image" />
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner mt-auto text-center bg-dark">
//                         <span className="banner-text text-center align-middle">WhetherFun</span>
//                     </div>
//                 </div>
//             </div>
//             </a>
//         </div>
//         <div className="col-xs-12 col-md-6 mb-3 mt-3">
//             <a href="https://aurbini.github.io/homework-6/">
//             <div className="card bg-dark text-white">
//                 <img className="card-img port-pic" src={WeatherDash} alt="Card image"/>
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner mt-auto text-center bg-dark">
//                         <span className="banner-text">Weather DashBoard</span></div>
//                 </div>
//             </div>
//             </a>
//         </div>
//         <div className="col-xs-12 col-md-6 mb-3">
//             <a href="https://aurbini.github.io/homework-3/">
//             <div className="card bg-dark text-white">
//                 <img className="card-img port-pic" src={Password} alt="Card image"/>
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner bg-dark text-center mt-auto"><span className="banner-text">Password Generator</span></div>
//                 </div> 
//             </div>
//             </a>
//         </div>
//         <div className="col-xs-12 col-md-6 mb-3">
//             <div className="card bg-dark text-white">
//                 <img className="card-img port-pic" src={TeaCozy} alt="Card image"/>
//                 <div className="banner-color card-img-overlay d-flex flex-column">
//                     <div className="banner mt-auto bg-dark text-center w-100"><span className="banner-text">TeaCozy</span></div>
//                 </div>
//             </div>
//         </div>
//         </div>   
//     </div>