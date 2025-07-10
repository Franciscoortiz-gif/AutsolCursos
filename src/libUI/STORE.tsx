import {
  Card,
  CardContent,
} from "@/components/ui/card"

 
function Store() {
  return (
   <>
    <div className="h-[100vh] lg:h-[90vh] bg-blue-500 flex justify-center items-center">
        <div className="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4">
          <div className="flex flex-col justify-start ml-4 lg:ml-64 mr-4 col-span-2">
            <div className="text-left mb-6 font-medium"><label className="text-left text-amber-300 text-[20px]">Aprende todo sobre automatizacion con nuestros:</label></div>
            <div className="text-left font-medium mb-10"><label className="text-3xl lg:text-7xl text-left">Cursos practicos de marcas como Delta, Wago, AllenBradley y Siemes con instructores altamente calificados.</label></div>
            <div className="flex justify-start"><input type="text" placeholder="Buscar" className="w-72 lg:w-3xl h-11 rounded-[5px] p-1" /><button>Bus</button></div>
          </div>
          <div>
            <div className="flex flex-row">
              <Card>
                <CardContent className="w-2xs">
                  <img src="" alt="" />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <img src="" alt="" />
                </CardContent>
              </Card>
              <div>
                <Card>
                <CardContent>
                  <div>star <span>5.0 Calificacion</span></div>
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