import './App.css'
import Navbarlis from './libUI/navbar';
import Pie from './libUI/foter';
import Store from './libUI/STORE';

function Home(){

  return (
    <>
      <Navbarlis></Navbarlis>
      <Store></Store>
      <Pie></Pie>
    </>
    )
}

export default Home