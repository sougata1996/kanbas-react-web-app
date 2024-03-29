import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  console.log("api base is this :-");
  console.log(API_BASE);

  const URL = `${API_BASE}/api/courses`;

  useEffect(() => {
    const findAllCourses = async () => {
      console.log(URL);
      const response = await axios.get(URL);
      setCourses(response.data);
    };

    findAllCourses();
  }, [URL]);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  //   const addNewCourse = (courseName) => {
  //     setCourses(prevCourses => [...prevCourses, { name: courseName, _id: new Date().getTime()}]);
  // };

  const addCourse = async (courseName) => {
    try {
      const response = await axios.post(URL, course);

      // Assuming the response.data is a single course object
      setCourses((courses) => [
        ...courses,
        { name: courseName, _id: response.data },
      ]);
      setCourse({ name: "" });
    } catch (error) {
      // Handle error, e.g., log it or display a message to the user
      console.error("Error adding course:", error);
    }
  };

  const deleteCourse = async (courseId) => {
    await axios.delete(`${URL}/${course._id}`);

    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />

        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  setCourses={setCourses}
                />
              }
            />
            <Route path="Courses/*" element={<Courses />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
