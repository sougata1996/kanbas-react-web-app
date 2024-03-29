import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "../assignmentsReducer";
import * as client from '../assignmentService';

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUpdateAssignment = async () => {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      };
    

    const initialAssignment = useSelector(state =>
        state.assignmentsReducer.assignments.find(assignment => assignment._id === assignmentId)
    );


    const [assignment, setAssignmentState] = useState(initialAssignment || {
        name: '',
        course: '',
        description: '',
        points: ''
    });

    useEffect(() => {
        if (initialAssignment) {
            setAssignmentState(initialAssignment);
        }
    }, [initialAssignment]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignmentState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateAssignment();
        console.log("Assignment updated:", assignment);
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="container mt-5">
            <h2>Edit Assignment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={assignment.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input
                        type="text"
                        className="form-control"
                        name="course"
                        value={assignment.course}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={assignment.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Points</label>
                    <input
                        type="text"
                        className="form-control"
                        name="points"
                        value={assignment.points}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/*... other form elements...*/}
                <button type="submit" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-danger ml-2" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default AssignmentEditor;
