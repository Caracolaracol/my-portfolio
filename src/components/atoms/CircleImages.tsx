import { Suspense } from 'react'
import yo1 from "@/assets/images/yo.jpg"
import yo2 from "@/assets/images/yo2.jpg"


export default function CircleImages() {

    return (
        <div className='relative flex h-full w-full items-end justify-center rounded-full'>
            <Suspense fallback={null}>
                <img
                    alt="Myself with nature background"
                    src={yo1.src}
                    className="circle_img_1"
                />
                <img
                    alt="Myself with other nature background "
                    className="circle_img_2"
                    src={yo2.src}
                />
            </Suspense>
        </div>
    )
}

