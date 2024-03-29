
import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";  
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";  
import Grades from "./Grades";


function Courses() { 
  
  return (
    <div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>

            <Route path="Grades" element={<Grades />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;

