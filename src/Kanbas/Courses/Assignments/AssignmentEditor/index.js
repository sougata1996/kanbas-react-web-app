import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container mt-5">

        <h2 className="mb-3">Assignment Name</h2>
        <input 
            value={assignment.title}
            className="form-control mb-3"
            placeholder="Assignment Name"
        />

        <textarea 
            value={assignment.description}
            className="form-control mb-3"
            rows="5"
            placeholder="Assignment description"
        ></textarea>

        <h2 className="mb-2">Points</h2>
        <input 
            value={assignment.points}
            className="form-control mb-3"
            placeholder="Points"
        />

        <h2 className="mb-2">Assignment Group</h2>
        <select 
            name="assignmentGroup" 
            id="assignmentGroup"
            className="form-control mb-3"
        >
            <option value="group1">ASSIGNMENTS</option>
        </select>

        <h2 className="mb-2">Display Grade as</h2>
        <select 
            name="displayGradeAs" 
            id="displayGradeAs"
            className="form-control mb-3"
        >
            <option value="percentage">Percentage</option>
        </select>

        <div className="mb-3">
            <input type="checkbox" id="countCheckbox" />
            <label className="ms-2" htmlFor="countCheckbox">Do not count this assignment towards the final grade</label>
        </div>

        <div>
            <Link 
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger mr-2"
            >
                Cancel
            </Link>
            <button 
                onClick={handleSave} 
                className="btn btn-success"
            >
                Save
            </button>
        </div>
    </div>
);

}


export default AssignmentEditor;

