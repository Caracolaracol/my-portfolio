import React, { useEffect, useState } from "react";

function ProjectImages({ images }: { images: string[] | undefined }) {
    const [indexImage, setIndexImage] = useState<number>(0);
    const [indexNextImage, setIndexNextImage] = useState<number>(0);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isCooldown, setCooldown] = useState(false);

    const handleChangeImage = (idx: number) => {
        if (!isCooldown) {
            // Execute your logic here
            setIndexImage(indexNextImage == 0 ? 0 : indexNextImage);
            setIndexNextImage(idx);
            setImageLoaded(true);
            setTimeout(() => {
                setImageLoaded(false);
                setIndexImage(idx);
            }, 150);
            // Set cooldown to true
            setCooldown(true);

            // Set a timeout to reset the cooldown after a certain time (e.g., 2 seconds)
            setTimeout(() => {
                setCooldown(false);
            }, 200); // Adjust the time as needed
        }
    };

    /*
      useEffect(() => {
          if (images) {
              const interval = setInterval(() => {
                  if ((images.length - 1) == indexImage){
                      setIndexNextImage(0)
                  } else {
                      setIndexNextImage(indexImage + 1)
                  }
                  setImageLoaded(true)
                  setTimeout(() => {
                      setImageLoaded(false);
                      if((images.length - 1) > indexImage){
                          setIndexImage((prevState) => prevState + 1)
                      } else {
                          setIndexImage(0);
                      }
                  },150)
  
              }, 3500)
              return () => {
                  clearInterval(interval)
              }
          }
      }, [images, indexImage]) */

    return (
        <div className="flex flex-col laptop:flex-row laptop:items-center w-[100%] mx-auto not-prose px-16 gap-2">
            <div className="w-full rounded-lg">
                <div className="rounded-lg">
                    <div className="relative h-full aspect-video rounded-lg">
                        {images && (
                            <img
                                alt={images[indexImage]}
                                src={images[indexImage]}

                                className={`absolute  w-full  rounded-lg object-contain aspect-video transition-opacity opacity-100 ease-in-out ${imageLoaded ? "opacity-0" : "opacity-100"} `}
                            />
                        )}
                        {images && (
                            <img
                                alt={images[indexNextImage]}
                                src={images[indexNextImage]}

                                className={`absolute w-full rounded-lg object-contain aspect-video transition-opacity ease-in-out ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="laptop:h-[100%] laptop:mx-0 w-[100%] laptop:w-[12.7%]  rounded-md">
                <div className="grid grid-cols-4 w-[75%] mx-auto laptop:mx-0 laptop:w-[100%] laptop:grid-cols-1 place-content-around laptop:place-content-center h-full">
                    {images &&
                        images?.map((image, idx) => (
                            <button
                                onClick={() => handleChangeImage(idx)}
                                onMouseEnter={() => handleChangeImage(idx)}
                                key={image}
                                style={{ borderColor: 'transparent' }}
                                className="mx-[0.2em] laptop:mx-0 aspect-square border-2 border-transparent  rounded-md  overflow-hidden hover:brightness-125 block"
                            >
                                <img
                                    alt="imgs"
                                    src={image}
                                    className="object-fill scale-[3] "
                                />
                            </button>
                        ))}
                    {images && images.length == 2 && (
                        <>
                            <span className="mx-[0.2em] laptop:mx-0 aspect-square border-2  border-opacity-0 rounded-md overflow-hidden block"></span>
                            <span className="mx-[0.2em] laptop:mx-0 aspect-square border-2  border-opacity-0 rounded-md  overflow-hidden block"></span>
                        </>
                    )}
                    {images && images.length == 3 && (
                        <span className="mx-[0.2em] laptop:mx-0 aspect-square  rounded-md  overflow-hidden block"></span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectImages;
