import React, { useState } from "react";
import EmblaCarousel from "./Carousel";
import { useStore } from "@nanostores/react";
import { isColorGalleryAtom } from "@/store";

function ImageGallery({ slides }: any) {
  const isColorGallery = useStore(isColorGalleryAtom)
console.log(isColorGallery)
  return (
    <div className="bg-dark w-full h-full absolute z-40 top-0 left-0">
      <div style={isColorGallery ? { backgroundColor: isColorGallery + '99' } : {}} className={`absolute z-50 transition-color  top-0 left-0 w-full h-full duration-1000 ${!isColorGallery ? 'bg-raisinblack' : ''} `}>
        <div>
          <div className="bg-cerise my-10 pt-10 flex flex-col h-[5rem] justify-center px-8">
            <h1 className="tablet:tracking-wide tablet:text-5xl laptop:text-5xl desktop:text-5xl laptop:tracking-normal cursor-default text-[2.4rem]">
              Macro Photography
            </h1>
          </div>
          <div className="flex justify-center">
          <p className="prose text-platinum text-center !mt-0">
          This gallery highlights my macro shots of bugs, focusing on capturing their character and connection with their environment. I patiently wait for the perfect moment when the insect blends naturally with its surroundings.
            </p>
            </div>
        </div>

        <EmblaCarousel slides={slides} />
      </div>
    </div>
  );
}

export default ImageGallery;
