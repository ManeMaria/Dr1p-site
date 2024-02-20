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



export function Carousel() {
  return (
    <ul className={`grid xl:grid-cols-3 xs:grid-cols-2 items-center`} >
      {images.slice(0, 6).map((image, i) => (
        <li key={`${image}_${i}`}>
          <iframe
            key={`${image}_${i}`}
            src={image}
            allowFullScreen
            allow="clipboard-write"
            className={`
                     
                      xl:w-[33vw]
                      xs:w-[50vw]
                      max-w-[none]
                      h-[30rem]
                      object-cover
                  `}

          />
        </li>
      ))}
    </ul>
  )
}
