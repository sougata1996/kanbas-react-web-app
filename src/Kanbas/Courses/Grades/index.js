import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFileExport, faGear, faFilter } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Grades() {
  let  { courseId } = useParams();
  if(courseId === '*') {
    courseId = db.modules[0].course;
 }
  
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div className="col-8">
      {/* Gradebook and other Buttons */}
      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-secondary mr-2">
        <FontAwesomeIcon icon={faFileImport} /> Import
        </button>
        <div className="btn-group">
          <button className="btn btn-success">
          <FontAwesomeIcon icon={faFileExport} /> Export
          </button>
          <button className="btn btn-success dropdown-toggle mr-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
          <div className="dropdown-menu">
            <button className="dropdown-item" >Option 1</button>
            <button className="dropdown-item" >Option 2</button>
          </div>
        </div>
        <button className="btn btn-info">
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>
      <br /><br /><br />

      {/* Student and Assignment Search Bars */}
      <div className="row mb-3">
        <div className="col">
          <h4>Student Names</h4>
          <input type="text" className="form-control" placeholder="Search Students" />
        </div>
        <div className="col">
          <h4>Assignment Names</h4>
          <input type="text" className="form-control" placeholder="Search Assignments" />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary">
          <FontAwesomeIcon icon={faFilter} /> Apply Filters
          </button>
        </div>
      </div>

      {/* Grades Table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title} Out of 100</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                   <td key={assignment._id}>
                <input type="text" className="form-control" value={grade?.grade || ""} />
            </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
