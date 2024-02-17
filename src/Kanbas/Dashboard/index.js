import { Link } from "react-router-dom";
import db from "../Database";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  let numberOfCourses = courses.length;

  return (
    <div>
      {/* Navigation Sidebar */}
      <div className="navigation-container">
        {/* ... keep the existing navigation code ... */}
      </div>

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
        <div className="d-flex flex-row flex-wrap published-courses-grid">
          {courses.map((course) => (
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="card"
              style={{ width: "15rem" }}
            >
              <div className="card-header text-white mb-3"></div>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">link {course.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
