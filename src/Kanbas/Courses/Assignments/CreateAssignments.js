import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAssignment } from './assignmentsReducer';
import { useNavigate } from 'react-router';
import { createAssignment } from './assignmentService';
import { useParams } from "react-router-dom";
import db from "../../Database";


function CreateAssignment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { courseId } = useParams(); 

    const handleAddAssignment = () => {
        createAssignment(courseId, assignment).then((assignment) => {
          dispatch(addAssignment(assignment));
        });
      };
      
      if(courseId === '*') {
        courseId = db.assignments[0].course;
     }

    const [assignment, setAssignment] = useState({
        name: '',
        course: '',
        description:'',
        dueDate: '',
        availableFromDate: '',
        availableUntilDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAssignment(({
            ...assignment,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddAssignment();
        navigate(-1);
    };

    const handleCancel = () => {
        navigate(-1);
    };


    return (
        <div className="container mt-4">
            <h2>New Assignment </h2>
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
                    <textarea
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
                    <label className="form-label">Due Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dueDate"
                        value={assignment.dueDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Available From</label>
                    <input
                        type="date"
                        className="form-control"
                        name="availableFromDate"
                        value={assignment.availableFromDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Available Until</label>
                    <input
                        type="date"
                        className="form-control"
                        name="availableUntilDate"
                        value={assignment.availableUntilDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default CreateAssignment;
