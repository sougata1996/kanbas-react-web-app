import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';

export let courseId;

function ModuleList() {
  let { courseId } = useParams();
  let modules;
  if(courseId === '*') {
     courseId = db.modules[0].course;
  }

modules = db.modules.filter((module) => module.course === courseId);
  
 
  return (
    
      <div className="container mt-5">
      <button class="btn btn-danger float-end ms-2">+ Module</button>
      <button class="btn btn-secondary dropdown-toggle float-end ms-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Publish All
                        </button>
                        <button class="btn btn-secondary float-end ms-2">View Progress</button>
                <button class="btn btn-secondary float-end ms-2">Collapse All</button>
                    
                        <div class="clearfix"></div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" >Action</button>
                            <button class="dropdown-item" >Another action</button>
                            <button class="dropdown-item" >Something else here</button>
                          
                        </div>
                     
      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <div class="list-group mt-3">
           <div key={index} className="list-group-item list-group-item-secondary">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             </div>
             {
                module.lessons && (
                  <div>
                  <div class="list-group-item">Learning Objectives <i class="fas fa-check float-end "></i></div>
                        {
                            module.lessons.map((lesson, index) => (
                                <div key={index} className="list-group-item pl-5">
                                    <h4>{lesson.name}</h4> <i class="fas fa-check float-end"></i>
                                    <p>{lesson.description}</p>
                                </div>
                            ))
                        }
                        </div>
                   
                )
             }
           
           </div>
      ))
      }

</div>
  );
}
export default ModuleList;