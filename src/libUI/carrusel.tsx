import React from "react"
import { useState } from "react"
import { type CarouselApi } from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export default function  Carousel12() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
 
  return (
    <Carousel setApi={setApi} className="animate-jump animate-once animate-duration-[3000ms] animate-ease-in-out animate-alternate animate-fill-both">
      <CarouselContent>
        <CarouselItem><img src="../public/1.png" alt=""  id="carr" className=""/></CarouselItem>
        <CarouselItem><img src="../public/2.png" alt=""  id="carr" className=""/></CarouselItem>
        <CarouselItem><img src="../public/3.png" alt=""  id="carr" className=""/></CarouselItem>
        <CarouselItem><img src="../public/4.png" alt=""  id="carr" className=""/></CarouselItem>
        <CarouselItem><img src="../public/5.png" alt=""  id="carr" className=""/></CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}