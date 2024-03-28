import React, { useState } from "react";
import './index.css'
 
function CourseEdit({ selectedCourse, setEditing, editCourse }) {
  const [editedCourse, setEditedCourse] = useState({ ...selectedCourse });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse({ ...editedCourse, [name]: value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    editCourse(editedCourse);
    setEditing(false);
  };
 
  const handleCancel = () => {
    setEditing(false);
  };
 
  return (
    <div className="course-edit-container"> 
    <div className="course-edit-content mb-4">
      <h2>Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="name"
            name="name"
            value={editedCourse.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="courseNumber" className="form-label">
            Course Number
          </label>
          <input
            type="text"
            className="form-control w-50"
            name="number"
            id="courseNumber"
            value={editedCourse.number}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control w-50"
            name="startDate"
            id="startDate"
            value={editedCourse.startDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label for="endDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control w-50"
            name="endDate"
            id="endDate"
            value={editedCourse.endDate}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Save
        </button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
    </div>
  );
}
 
export default CourseEdit;
  