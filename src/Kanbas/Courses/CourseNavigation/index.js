import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments","Quizzez", "Grades", "People", "Panopto Video", "Discussions",
"Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const pageName = pathname.split('/').pop();
  const decodedPageName = decodeURIComponent(pageName);
  
  return (
    <div className="container-fluid">
      <div className="row">
                {/* Breadcrumb */}
       <nav aria-label="breadcrumb" className="custom-breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item" style={{ color: 'red' }}>
                    <FontAwesomeIcon icon={faBars} />
                </li>
                        <li className="breadcrumb-item"  style={{ color: 'red' }}>Course Name</li>
                        <li className="breadcrumb-item"  style={{ color: 'red' }}>Term</li>
                        <li className="breadcrumb-item section-crumb section-crumb"  style={{ color: 'red' }} >Section</li>
                        <li className="breadcrumb-item active" aria-current="page"  style={{ color: 'red' }}>{decodedPageName}</li>
                    </ol>
                    <hr className="my-1" />
                </nav>
      <div className="column col-2 second" id="course-nav">
                    <div className="account-navigation">
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {links.map((link, index) => (
                                <li key={index} className={pathname.includes(`/Kanbas/Courses/${courseId}/${link}`) ? "selected" : ""}>
                                    <Link to={`/Kanbas/Courses/${courseId}/${link}`}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

    
    </div>
    </div>

  );
}

export default CourseNavigation;

