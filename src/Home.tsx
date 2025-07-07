import './App.css'
import Carousel12 from './libUI/carrusel';
import Navbarlis from './libUI/navbar';
import Pie from './libUI/foter';
import Store from './libUI/STORE';

function Home(){

  return (
    <>
      <Navbarlis></Navbarlis>
      <Carousel12></Carousel12>
      <Store></Store>
      <Pie></Pie>
    </>
    )
}

export default Home