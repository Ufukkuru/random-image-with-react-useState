import './App.css';
import React, {useState} from 'react';
import Course from './component/course';


function getRandomCourse() {
  const courseArray = ['ReactImages', 'Angular', 'Vue', 'Jquery'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <>
      <button onClick={handleClick} className='flex relative text-2xl text-center justify-center items-center mx-auto mt-12 mb-20 w-56 h-20 bg-indigo-700 text-white rounded-full'>Random Add Course</button>
      <div className='container w-full mx-auto grid grid-cols-4 justify-center space-x-3 relative items-center text-center'>{courseList}</div>
    </>
  );
}

export default App;
