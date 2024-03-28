import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule,resetModule } from './modulesReducer';
import { Button } from "react-bootstrap";

export let courseId;


function ModuleList() {
  let { courseId } = useParams();
 
const modules = useSelector((state) => state.modulesReducer.modules);
const module = useSelector((state) => state.modulesReducer.module);
console.log("modules", modules);
const dispatch = useDispatch();

  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }


  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };


  // const addModule = (module) => {
  //   setModules([
  //     ...modules,
  //     { ...module, _id: new Date().getTime().toString() },
        
  //   ]);
  // };


  if(courseId === '*') {
     courseId = db.modules[0].course;
  }

// modules = db.modules.filter((module) => module.course === courseId);
  
 
  return (
      <div className="container mt-5">
      {/* <button class="btn btn-danger float-end ms-2" onClick={() => { addModule(module) }}>+ Module</button>
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
                          
                        </div> */}
  <ul className="list-group mod">
      <li className="list-group-item">
        <Button  className="btn-space" onClick={() =>{ dispatch(addModule({ ...module, course: courseId }));
      dispatch(resetModule());}}>Add</Button>
        <button className="btn btn-primary btn-space" onClick={() => {dispatch(updateModule(module));
        dispatch(resetModule());}}>
                Update
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
         onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))
}
        />
      </li>

                     
      {modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
          <div class="list-group mt-3">
           <div key={index} className="list-group-item list-group-item-secondary">
           <button className="btn btn-green btn-space"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

           <button className="btn btn-danger btn-space"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

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
      </ul>

</div>
  );
}
export default ModuleList;