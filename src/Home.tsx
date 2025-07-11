import './App.css'
import Navbarlis from './Home-Utils/navbar';
import Pie from './Home-Utils/foter';
import Store from './Home-Utils/STORE';
import Bestcourses from './Home-Utils/bestcourses';
import Instructors from './Home-Utils/teachers';

function Home(){

  return (
    <>
      <Navbarlis></Navbarlis>
      <Store></Store>
      <Bestcourses></Bestcourses>
      <Instructors></Instructors>
      <Pie></Pie>
    </>
    )
}

export default Home