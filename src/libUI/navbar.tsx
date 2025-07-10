import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  textarea,
} from "@material-tailwind/react";
import { IoLockClosed } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import profileimg from "../assets/Black and White Solid Icon Logo.png"
import { useLocation } from 'react-router-dom';
import { Contact } from "lucide-react";

export default function Navbarlis() {
//////////////////////////////// declaration variable ///////////////////////////////////////////////////////
  const [openNav, setOpenNav] = React.useState(false);
  const [isHidden, setHidden] = useState(false)
  const [coockie] = useCookies(['user']);
  const [imageprofile, setImage] = useState("")
  const [username, setUsername] = useState("")
  const [email, setImail] = useState("")
  const [witdh, setWitdh] = useState(window.innerWidth)
  const [hid, setHid] = useState(false)
  const [home, setHome] = useState("text-amber-50")
  const [cursos, setCursos] = useState("text-amber-50")
  const [contat, setContact] = useState("text-amber-50")
  const [Foro, setForo] = useState("text-amber-50")

  let user = coockie['user'];
  const location = useLocation();






/////////////////////////code/////////////////////////////////////////////////// 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );

    if(user){
        setHidden(true)
        setUsername(user[0].name)
        setImail(user[0].email)
        if(user[0].image != null){
          setImage(user[0].image)
        }else{
          setImage(profileimg)
        }
    }else{
        setHidden(false)
    }

    switch(location.pathname){
      case "/":
        setHome("text-amber-400")
        setCursos("text-amber-50")
        setForo("text-amber-50")
        setContact("text-amber-50")
        break;
      case "/Cursos":
        setHome("text-amber-50")
        setCursos("text-amber-400")
        setForo("text-amber-50")
        setContact("text-amber-50")
        break;
      case "/Contacto":
        setHome("text-amber-50")
        setCursos("text-amber-50")
        setForo("text-amber-50")
        setContact("text-amber-400")
        break;
      case "/Foro":
        setHome("text-amber-50")
        setCursos("text-amber-50")
        setForo("text-amber-400")
        setContact("text-amber-50")
        break;
      default:
        setHome("text-amber-50")
        setCursos("text-amber-50")
        setForo("text-amber-50")
        setContact("text-amber-50")
        break;
    }
  }, []);
  useEffect(() => {
    const witdhChange = () =>{
      setWitdh(window.innerWidth)
    };

    window.addEventListener('resize', witdhChange);
    if(witdh > 1024){
      setHid(true)
    }else{
      setHid(false)
    }

    return () => {
      window.removeEventListener('resize', witdhChange);
    };
  });

 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 w-full">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
 
        <a href="/" className="flex items-center ">
          <span id="ps" className={home}>Inicio</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <a href="#" className="flex items-center">
          <span id="ps" className={cursos}>Sobre Nosotros</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        
        <a href="#" className="flex items-center">
          <span id="ps" className={contat}>Contactanos</span>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center">
          <span id="ps" className={Foro}>Foro</span>
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="bg-blue-500 rounded-none border-none mx-auto w-full px-4 py-2 lg:px-8 lg:py-4 animate-fade animate-duration-1000 animate-ease-in-out animate-alternate">
      <div className="container mx-auto flex justify-between items-center  text-blue-gray-900 animate-fade-up animate-once animate-duration-1000">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium "
        >
          <span className="text-white text-4xl">Autsol</span> <span className="text-amber-400 text-4xl"> Cursos</span>
        </Typography>
        <div className="hidden lg:block animate-fade animate-duration-1000 animate-ease-in-out animate-alternate">{navList}</div>
        <div hidden={isHidden}>
            <div className="flex items-center gap-x-1 animate-fade animate-duration-1000 animate-ease-in-out animate-alternate">
            <button className="hidden lg:inline-block animate-fade animate-duration-1000 animate-ease-in-out animate-alternate w-44 h-12 items-center cursor-pointer transition-all delay-300 hover:opacity-75">
              <Link to={"/Login"}><span id="ps" className="flex items-center justify-items-center justify-center text-amber-50 w-full h-full transition-all delay-300 hover:opacity-75"><IoLockClosed className="mr-1.5 mt-1"/> Iniciar Sesion</span></Link>
            </button>
            <button 
              className="hidden lg:inline-block animate-fade animate-duration-1000 animate-ease-in-out animate-alternate w-44 h-12 items-center cursor-pointer bg-amber-500 rounded-2xl transition-all delay-300 hover:bg-amber-600"
            >
                <span><Link to={"/Register"}><span id="ps" className="text-amber-50 transition-all delay-300 hover:opacity-75">Registrarse</span></Link></span>
            </button>
            
          </div>
        </div>
        <div hidden={!hid}>
          <div hidden={!isHidden} className="flex items-center gap-x-1 animate-fade animate-duration-1000 animate-ease-in-out animate-alternate">
                <a href="/" className="flex flex-row w-full h-full">
                    <div>
                      <Avatar className="w-full h-14">
                        <AvatarImage src={imageprofile} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-left ml-4">
                      <div>
                      <label className="text-2xl text-amber-50" htmlFor="">{username}</label>
                    </div>
                    <div>
                      <label className="text-amber-50" htmlFor="">{email}</label>
                    </div>
                    </div>
                </a>
            </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div hidden={isHidden} className="flex items-center gap-x-1">
            <button className="bg-amber-500 w-40 h-8 rounded-2xl hover:bg-amber-600">
              <span><Link className="" to={"/Login"}><span className="text-amber-50">Iniciar Sesion</span></Link></span>
            </button>
            <button className="bg-amber-500 w-40 h-8 rounded-2xl hover:bg-amber-600">
              <Link to={"/Register"}><span className="text-amber-50">Registrarse</span></Link>
            </button>
          </div>
              <a href="/" className="cursor-pointer z-0">
                <div className="flex flex-row z-10">
                    <div>
                      <Avatar className="w-full h-14">
                        <AvatarImage src={imageprofile} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="text-left ml-4">
                      <div>
                      <label className="text-2xl text-amber-50" htmlFor="">{username}</label>
                    </div>
                    <div>
                      <label className="text-amber-50" htmlFor="">{email}</label>
                    </div>
                    </div>
                </div>
              </a>
        </div>
      </MobileNav>
    </Navbar>
  );
}