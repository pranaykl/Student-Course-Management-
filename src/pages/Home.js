// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [courseName, setCourseName] = useState('');
  const [courses, setCourses] = useState([]);

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleCourseRegister = (e) => {
    e.preventDefault();
    if (courseName.trim()) {
      setCourses([...courses, courseName]);
      setCourseName('');
    }
  };

  return (
    <div className="home-container">
      <h2>Welcome to the Student Course Management System</h2>
      <p>
        The Student Course Management System is a comprehensive platform designed to facilitate the management of student courses and related activities. This system aims to streamline the processes involved in course registration, management, and communication between students and instructors.
      </p>
      <p><strong>Key Features:</strong></p>
      <ul className="features-list">
        <li>📚 <span>Easy course registration and management</span></li>
        <li>🗂️ <span>Organized course materials and resources</span></li>
        <li>📅 <span>Efficient scheduling and timetable management</span></li>
        <li>🔔 <span>Real-time notifications and updates</span></li>
        <li>📊 <span>Detailed progress tracking and performance reports</span></li>
        <li>💬 <span>Seamless communication between students and instructors</span></li>
      </ul>
      <div className="interactive-sections">
        <div className="section">
          <h3>For Students</h3>
          <p>
            Manage your courses with ease. Register for new courses, access course materials, view your schedule, and track your progress all in one place.
          </p>
        </div>
        <div className="section">
          <h3>For Instructors</h3>
          <p>
            Organize your teaching activities efficiently. Create and manage courses, communicate with students, and monitor their progress with our powerful tools.
          </p>
        </div>
      </div>
      <div className="course-registration">
        <h3>Register a New Course</h3>
        <form onSubmit={handleCourseRegister}>
          <input
            type="text"
            placeholder="Enter course name"
            value={courseName}
            onChange={handleCourseNameChange}
            required
          />
          <button type="submit">Register Course</button>
        </form>
        <p className="course-count">Total Registered Courses: {courses.length}</p>
      </div>
      <div className="courses-list">
        <h3>Registered Courses</h3>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <div className="call-to-action">
        <h3>Get Started Today!</h3>
        <p>
          Join our community and take advantage of our powerful course management features. <a href="/register">Register now</a> and start your journey with us.
        </p>
      </div>
    </div>
  );
}

export default Home;
