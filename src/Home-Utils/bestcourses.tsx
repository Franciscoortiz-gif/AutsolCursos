import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import carrimg from "../assets/Black and White Solid Icon Logo.png"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const labels: { [index: string]: string } = {
  0.5: '(0.5)',
  1: '(1)',
  1.5: '(1.5)',
  2: '(2)',
  2.5: '(2.5)',
  3: '(3)',
  3.5: '(3.5)',
  4: '(4)',
  4.5: '(4.5)',
  5: '(5)',
};


function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



function Bestcourses(){
  const [value, setValue] = React.useState<number | null>(5);

    return(
        <>
            <div className="bg-white w-[100%] h-min-[500px] h-max-[250vh] h-auto leading-44  pt-[5%] ">
                <div className="animate-jump-in animate-duration-[2000ms] animate-ease-out">
                    <div className="text-left pl-[15%] lg:pl-[10%] xl:pl-[20%] leading-44">
                    <p className="text-black font-medium text-[28px] leading-11 lg:text-5xl xl:text-6xl xl:leading-20">Cursos</p>
                    <p className="text-blue-500 font-medium text-[28px] leading-11 lg:text-5xl xl:text-6xl lg:leading-20">Mas Populares</p>
                </div>
                <div className="w-full flex justify-center items-center bg-white mt-10">
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        plugins={[
                            Autoplay({
                            delay: 3000,
                            }),
                        ]}
                        className="w-full max-w-[60%] lg:max-w-[80%] xl:max-w-[60%]  mb-[10%]"
                        >
                        <CarouselContent>
                            {Array.from({ length: 10 }).map((_, index) => 
                            (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="p-1">
                                <Card className="border-none p-1 m-0 shadow-lg mb-5 bg-gray-50">
                                    <CardContent className="flex aspect-square items-center justify-center h-[320px] p-0 m-1">
                                    <a href="" className="w-full h-full">
                                        <div className="grid grid-cols-1 grid-rows-2 w-full h-full">
                                            <div className="w-full flex flex-col w-max-[100%]">
                                                <div className=""><img src={carrimg} alt="" className="w-full h-[190px] rounded-[10px]"/></div>
                                            </div>
                                            <div className="text-start pl-1 pt-7 flex flex-col">
                                                <p className="font-medium text-black leading-10 text-3xl">Titulo</p>
                                                <p className="font-medium text-black leading-10">$precio</p>
                                                <Box sx={{ width: 200,height: 50, display: 'flex', alignItems: 'center' }}>
                                                <Rating
                                                    name="hover-feedback"
                                                    value={value}
                                                    precision={0.5}
                                                    getLabelText={getLabelText}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                />
                                                {value !== null && (
                                                    <Box sx={{ ml: 1, color:"black" }}>{labels[value !== -1 ? value : value]}</Box>
                                                )}
                                                </Box>
                                            </div>
                                        </div>
                                    </a>
                                    </CardContent>
                                </Card>
                                </div>
                                
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-amber-400 border-none hover:opacity-80 hover:bg-amber-200" />
                        <CarouselNext className="bg-amber-400 border-none hover:opacity-80 hover:bg-amber-200" />
                    </Carousel>
                </div>
                </div>
            </div>
        </>
    )
}

export default Bestcourses