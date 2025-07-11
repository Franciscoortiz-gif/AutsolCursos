import { Card,
  CardContent,
  CardFooter,
  CardHeader } from "@/components/ui/card"
import carrimg from "../assets/Black and White Solid Icon Logo.png"


function Instructors(){
    const cardclas = "m-0 p-2 border-none shadow-lg bg-gray-50 md:w-[202px] lg:w-[202px] xl:w-[302px]" 
    const imageclass = "lg:w-[202px] xl:w-[302px] md:w-[202px]  lg:h-[150px] xl:h-[200px] rounded-[10px]"
    const namclass = "lg:text-3xl xl:text-4xl font-medium text-black"
    const puesclass = "lg:text-[16px] xl:text-[18px] font-medium text-black opacity-45"
    return(
        <>
            <div className="bg-gray-300 w-full h-min-[300px] h-max-[500vh] h-auto">
                <div className="flex flex-col ">
                    <div className="w-full flex justify-start pb-[2%] lg:pl-[15%]">
                        <p className="text-black font-medium text-3xl lg:text-5xl pt-[10%] md:pl-[15%] lg:pl-0 lg:pt-[5%]">Nuestros <span className="text-blue-500">Instructores</span></p>
                    </div>
                    <div className="pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-15 lg:gap-40 xl:gap-20 w-[100%] lg:pl-[6%] xl:pl-[15%] md:pr-0 lg:pr-[15%]">
                            <div className="lg:mb-[40%]">
                                <Card className={cardclas}>
                                    <CardHeader className="m-0 p-0">
                                        <img src={carrimg} alt="" className={imageclass}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <p className={namclass}>Name</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div>
                                            <p className={puesclass}>Puesto de trabajo</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div>
                                <Card className={cardclas}>
                                    <CardHeader className="m-0 p-0">
                                        <img src={carrimg} alt="" className={imageclass}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <p className={namclass}>Name</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div>
                                            <p className={puesclass}>Puesto de trabajo</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div>
                                <Card className={cardclas}>
                                    <CardHeader className="m-0 p-0">
                                        <img src={carrimg} alt="" className={imageclass}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <p className={namclass}>Name</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div>
                                            <p className={puesclass}>Puesto de trabajo</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div>
                                <Card className={cardclas}>
                                    <CardHeader className="m-0 p-0">
                                        <img src={carrimg} alt="" className={imageclass}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            <p className={namclass}>Name</p>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <div>
                                            <p className={puesclass}>Puesto de trabajo</p>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instructors