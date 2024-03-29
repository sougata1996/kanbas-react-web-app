import { React, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CourseEdit from "./CourseEdit";


function Dashboard( {
  courses, setCourses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {
      console.log(courses);


  let numberOfCourses = courses.length;
  const [editing, setEditing] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const editCourse = (courseId) => {
    const courseToEdit = courses.find((course) => course._id === courseId);
    setSelectedCourse(courseToEdit);
    setEditing(true);
  }
  const [newCourseName, setNewCourseName] = useState('');

 
  return (
    <>
    <div>
      {/* Navigation Sidebar */}
      <div className="navigation-container">
        {/* ... keep the existing navigation code ... */}
      </div>

      {editing ? <CourseEdit selectedCourse={selectedCourse} editCourse={(editCourse) => {
              setCourses((prevCourses) =>
                prevCourses.map((course) =>
                  course._id === editCourse._id ? editCourse : course
                )
              );
            }} setEditing={setEditing} /> : 
      (
        <>

      {/* Dashboard Title */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>

      </header>
      <hr className="dashboard-hr" />

      {/* Published Courses Subtitle */}
      <div className="container">
        <div className="published-courses-subtitle">
        
          <h3>Published Courses ({numberOfCourses})</h3>
          <hr /> {/* This adds the horizontal line */}
        </div>
        {/* <div className="d-flex flex-row flex-wrap published-courses-grid"> */}

        <div className="d-flex mb-3">
        <input 
          type="text" 
          className="form-control mr-3" 
          placeholder="New Course"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          
        />
        <button className="btn btn-primary mr-3" onClick={() => addNewCourse(newCourseName)}>Add</button>
        <button className="btn btn-secondary" onClick={updateCourse}>Update</button>
        </div>
        {/* <button className="btn btn-primary mb-3">New Course</button> */}
          {courses.map((course) => (
            <>
              {<div className="row">
            {/* Column for Course Name */}
            <div className="col-md-8">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card card-link" >
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                     {course.name} 
                    </li>
                </ul>
                </Link>
            </div>

            {/* Column for Edit and Delete buttons */}
            <div className="col-md-4 d-flex ">
                <button className="btn btn-green mr-4" onClick={(event) => {
                  event.preventDefault();
                  editCourse(course._id);
                }}>Edit</button>

                <button className="btn btn-danger" onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
>Delete</button>
            </div>
        </div>
              
              /* <div className="card-header text-white mb-3"></div>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">link {course.name}</p>
              </div> */}
              </>
          ))}
        {/* </div> */}
      </div> </>)}
    </div>
    </>
  );
}
export default Dashboard;