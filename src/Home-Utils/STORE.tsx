import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MdOutlineSearch } from "react-icons/md";
import basicowago from "../assets/wagobasico.png"
import bdelta from "../assets/basicodelta.png"
import { TiStarFullOutline } from "react-icons/ti";

 
function Store() {
  return (
   <>
    <div className="h-min-[150vh] h-max-[500vh] h-auto lg:min-h-[90vh] lg:max-h-[500vh] lg:h-auto bg-[#1869E2] flex justify-center items-center animate-fade animate-duration-1000 animate-ease-out">
        <div className="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 xl:gap-10 gap-4">
          <div className="flex flex-col justify-start ml-4 lg:ml-32 xl:ml-64 mr-4 col-span-2">
            <div className="text-left mb-6 font-medium"><label className="text-left text-amber-300 lg:text-[26px] text-[20px]">Aprende todo sobre automatizacion con nuestros:</label></div>
            <div className="text-left font-medium mb-22"><label className="text-[28px] line md:text-[60px] lg:text-5xl xl:text-7xl text-left lg:leading-12 xl:leading-20">Cursos practicos de marcas como Delta, Wago, AllenBradley y Siemes con instructores altamente calificados.</label></div>
            <div className="flex justify-start mb-10"><input type="text" placeholder="Buscar" className="w-72 md:w-3xl lg:w-3xl h-11 lg:h-16 rounded-[5px] p-3 lg:text-2xl bg-amber-50 text-black border-none outline-none" />
            
            <button className="bg-amber-400 w-11 h-11 lg:h-16 lg:w-16 relative right-2 rounded-[5px] flex justify-center items-center cursor-pointer"><MdOutlineSearch className="lg:w-7 lg:h-7 h-4 w-4" /></button></div>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col justify-center mt-3 md:mb-20 mb-3 ml-4 lg:ml-0 items-center w-full h-full ">
              <div className="flex flex-row lg:justify-center md:items-center lg:items-center justify-start md:mb-[20px] lg:mb-[40px]">
                <Card className="m-0 p-0 lg:w-[40%] border-none rounded-[10px] bg-transparent rotate-[-5deg] z-0 ">
                <CardContent className="p-0">
                  <img src={bdelta} alt="" className="w-[100%] rounded-[10px]" />
                </CardContent>
              </Card>
              <Card className="m-0 p-0 lg:w-[40%] border-none rounded-[10px] bg-transparent rotate-[5deg] relative left-[-3%] ">
                <CardContent className="p-0">
                  <img src={basicowago} alt="" className="w-[100%] rounded-[10px]  " />
                </CardContent>
              </Card>
              </div>
              <div className="w-full flex justify-center items-center ">
                <Card className="w-2/3 lg:w-2/3 xl:w-1/2 border-none outline-none">
                <CardContent>
                  <div className="flex flex-row justify-center items-center"><span className="rounded-[10px] bg-cyan-100 "><TiStarFullOutline className="m-[0px] w-[60px] h-[60px] text-blue-500 p-[10px] "/></span><span className="font-medium text-[20px] text-center pl-3.5">5.0 Calificacion</span></div>
                </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
    </div>
   </>
  );
}


export default Store