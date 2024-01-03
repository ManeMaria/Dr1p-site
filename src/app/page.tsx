'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { DynamicHeader } from "@/components";
import NextImage from "@/components/NextImage";
import { useOnScroll } from "@/hooks";
import { useEffect, useState } from "react";

const fontSizeBanner = 'xs:text-[3rem] xl:text-[5.3vw]';

const images = [
  'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww',
  // 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
export default function Home() {
  const { visible, elementRef } = useOnScroll()

  return (
    <>
      <DynamicHeader />
      <main >
        <section className="h-[100vh] xl:w-[60%] xs:w-full mx-[auto]  max-w-[2xl] xl:pl-0 xs:pl-[2rem]">
          <span className="flex items-center w-full justify-between xl:flex-nowrap  xs:flex-wrap animate__animated animate__bounce animate__fadeInDown animate__slow	1s">
            <h3 className={`${fontSizeBanner} `}>
              Creative
            </h3>
            <h3 className="xl:text-sm xs:text-xs mt-[10px] ">
              Somos uma agência de inteligência social,<br />
              que conecta pessoas, marcas e histórias.
            </h3>
          </span>
          <span className="flex items-center w-full gap-[2rem] xl:ml-[40px] xs:ml-0 animate__animated animate__bounce animate__fadeInDown animate__slow	2s">
            <div className="xl:w-[126px] xl:h-[126px] xs:w-[56px] xs:h-[56px]">
              <NextImage src="static\images\word.svg" alt="word" />
            </div>
            <h3 className={`${fontSizeBanner}  xs:text-[2rem]`}>
              and results.
            </h3>
          </span>
          <span className="flex items-center gap-[30%] xl:flex-nowrap  xs:flex-wrap animate__animated animate__bounce animate__fadeInDown animate__slow	2s">
            <h3 className={`${fontSizeBanner}`}>
              We are
            </h3>
            <h3>
              <Link href="https://www.instagram.com/agenciadrip/" target="_blank" >
                @agenciadrip
              </Link>
            </h3>
          </span>
          <span className="flex items-center ml-[40px] gap-[30%] xl:flex-nowrap  xs:flex-wrap animate__animated animate__bounce animate__fadeInDown animate__slow	3s">
            <h3>
              www.agenciadrip.com.br
            </h3>
            <h3 className={`${fontSizeBanner} font-bold`}>
              Dr1p.
            </h3>
          </span>
          <Link href="/#projects">
            <div className="mx-[auto] my-[3rem] w-[3rem] h-[3rem]">
              <NextImage src="static\images\arrow-down.svg" alt="arrow-down" />
            </div>
          </Link>
        </section>

        <section className="bg-white text-black my-[3rem]" id='projects' >
          <span ref={elementRef} className={`w-full flex items-center animate__animated animate__bounce ${visible ? 'animate__fadeInDown ' : ''} animate__slow	3s`}>
            <h2 className="font-bold xl:text-[14vw] xs:text-[20vw] bg-transparent " >
              WORK
            </h2>
            <span className='xl:w-[64%] xs:w-[45%] bg-gray-300 h-[2px] overflow-hidden' />
          </span>
          <div className="flex w-full justify-between overflow-x-hidden gap-[2rem] max-h-[30rem]">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index}`}
                data-center={index === 1}
                data-left={index === 0}
                data-right={index === 2}
                className={`min-w-[30rem] object-cover rounded-[8px] data-[left="true"]:w-[10rem] data-[right="true"]:w-[10rem] data-[center="true"]:w-[30rem] data-[center="true"]:-translate-y-[10px] data-[center="true"]:shadow-2xl `}
              />
            ))}

          </div>
        </section>
      </main>
      <footer>

        <p>3
          Copyright © 2023 Agência Drip. Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}
