import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LabelButton } from "@/components/LabelButton";

const images = [
  // 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww',
  // 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww',
  // 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
  // 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  "https://www.behance.net/embed/project/185505743?ilo0=1",
  "https://www.behance.net/embed/project/176319971?ilo0=1",
  "https://www.behance.net/embed/project/176319971?ilo0=1",
  "https://www.behance.net/embed/project/170592467?ilo0=1",
  "https://www.behance.net/embed/project/172093385?ilo0=1",
  "https://www.behance.net/embed/project/95499853?ilo0=1",
  "https://www.behance.net/embed/project/162586067?ilo0=1",
  "https://www.behance.net/embed/project/160807933?ilo0=1",
  "https://www.behance.net/embed/project/162682905?ilo0=1",
  "https://www.behance.net/embed/project/178937003?ilo0=1",
  "https://www.behance.net/embed/project/178936683?ilo0=1",
  "https://www.behance.net/embed/project/180167385?ilo0=1",
  "https://www.behance.net/embed/project/169246193?ilo0=1"
];


const CAROUSEL_VIEWS = 3;
const CAROUSEL_STEP = 0;
const LAST_INDEX = images.length - 2;


export function Carousel() {
  const [carouselImages, setCarouselImages] = useState({
    images: images.slice(CAROUSEL_STEP, CAROUSEL_VIEWS),
    currentIndex: 1,
    isLeft: false,
  })

  const nextSlider = () => {
    setCarouselImages((prevCarouselImages) => {
      const sliders = [...images];
      const currentIndex = prevCarouselImages.currentIndex === LAST_INDEX ? CAROUSEL_STEP : prevCarouselImages.currentIndex;
      let newSliders = [];
      newSliders = [sliders[currentIndex], sliders[currentIndex + 1], sliders[currentIndex + 2]]

      return {
        images: newSliders,
        currentIndex: currentIndex + 1,
        isLeft: false
      }
    })

  }

  const prevSlider = () => {
    setCarouselImages((prevCarouselImages) => {
      const sliders = [...images];
      const currentIndex = prevCarouselImages.currentIndex === 1 ? LAST_INDEX : prevCarouselImages.currentIndex - 1;
      let newSliders = [];
      newSliders = [sliders[currentIndex - 1], sliders[currentIndex], sliders[currentIndex + 1]]

      return {
        images: newSliders,
        currentIndex,
        isLeft: true
      }
    })

  }
  return (
    <div className="w-full overflow-x-hidden relative">
      <motion.ul className={`
              flex
              gap-[4rem]
              items-center
              h-[40rem]
              bg-red-500"
            `} >
        <AnimatePresence mode="popLayout">
          {carouselImages.images.map((image, index) => (
            <li
              key={`${image}-${index}`}
              style={{
                flexBasis: '100%',
              }}>
              {/* <motion.img
                exit={{ opacity: 0, x: carouselImages.isLeft ? 200 : -200, scale: 0.5 }}
                transition={{ duration: 0.8, type: "spring" }}
                key={`${image}-${index}`}
                src={image}
                alt="image"
                className={`
                      bg-white-500
                      xl:w-[33vw]
                      xs:w-[100vw]
                      max-w-[none]
                      h-[30rem]
                      data-[center="true"]:shadow-2xl
                      xl:data-[center="true"]:scale-[1.2]
                      xs:data-[center="true"]:scale-[none]
                      object-cover
                      
                  `}
                data-center={index === 1}
                data-left={index === 0}
                data-right={index === 2}
              /> */}

              <motion.iframe
                exit={{ opacity: 0, x: carouselImages.isLeft ? 200 : -200, scale: 0.5 }}
                transition={{ duration: 0.8, type: "spring" }}
                src={image}
                allowFullScreen
                allow="clipboard-write"
                data-center={index === 1}
                data-left={index === 0}
                data-right={index === 2}
                className={`
                      bg-white-500
                      xl:w-[33vw]
                      xs:w-[100vw]
                      max-w-[none]
                      h-[30rem]
                      data-[center="true"]:shadow-2xl
                      xl:data-[center="true"]:scale-[1.2]
                      xs:data-[center="true"]:scale-[none]
                      object-cover
                      
                  `}

              />
            </li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <button type="button" className='text-[3rem] absolute top-[45%] left-[20px] rotate-[90deg] p-[1rem]' onClick={prevSlider}>
        <LabelButton />
      </button>
      <button type="button" className='text-[3rem] absolute top-[45%] right-[20px] -rotate-[90deg] p-[1rem]' onClick={nextSlider}>
        <LabelButton />
      </button>
    </div>
  )
}
