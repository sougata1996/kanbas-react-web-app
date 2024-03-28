import React from "react";
import {useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";

function Assignments() {
  const dispatch = useDispatch();
  let { courseId } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("CreateAssignment");
  };

  const handleDelete = (assignmentId) => {
    const confirmation = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmation) {
        dispatch(deleteAssignment(assignmentId)); // Assuming you have a deleteAssignment action
    }
};


if (courseId === '*') {
  courseId = db.modules[0].course;
}

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  

   const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  
  return (
    <div className="col-8">
      <div className="d-flex justify-content-between align-items-center">
        <input type="text" className="form-control w-25 mb-0" placeholder="Search for Assignments" />
        <div>
          <button className="btn btn-secondary mr-2">+Group</button>
          <button className="btn btn-danger mr-2" onClick={handleButtonClick} >+Assignment</button>
          <button className="btn btn-secondary mr-2">:</button>
        </div>
      </div>
      <hr className="my-2" />
      <div className="mb-4">
        <div className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
          <h4 className="mb-0">ASSIGNMENTS</h4>
          <div>
            <span className="mb-0 rounded p-8 bg-light mr-3">40% of Total</span>
            <button className="btn plus">+</button>
          </div>
        </div>
       
        
        <ul className="list-group">
          {courseAssignments
          .map((assignment) => ( 
            <div className="list-group-item green-border-left">
            <div className=" d-flex align-items-center" >
            <FontAwesomeIcon icon={faFileLines} className="fa-solid fa-file-lines assignment-icon mr-3" />
            <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} >
                
              <div>
                {assignment.name}<br />
                <small className="text-muted">{assignment.description}</small><br />
                <small className="text-muted"><b>Due</b> {assignment.dueDate} | {assignment.points}pts</small><br />
                <small className="text-muted"><b>AvailableFrom</b> {assignment.availableFromDate} |<b>AvailableUntil</b> {assignment.availableUntilDate}</small>
          
              </div>
              
              </Link>
              <FontAwesomeIcon icon={faCheck} className="checkmark-icon " />
                <button className="btn btn-danger" onClick={(event) =>{event.preventDefault(); handleDelete(assignment._id)}}>Delete</button>
              <button className="btn btn-font mr-2">:</button>
              </div>
             </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
