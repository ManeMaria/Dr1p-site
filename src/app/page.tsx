/* eslint-disable @next/next/no-img-element */
'use client';

import Link from "next/link";
import Head from "next/head";

import { Carousel, DynamicHeader, DefaultButtonColorWhite, DefaultButtonColorBlack } from "@/components";
import NextImage from "@/components/NextImage";
import { useOnScroll } from "@/hooks";
import { useState } from "react";
import { links } from "./data/urlsIcons";
import dynamic from "next/dynamic";


const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const fontSizeBanner = 'xs:text-[3rem] xl:text-[5rem] 3xl:text-[5vh]';

export default function Home() {
  const [openItem, setOpen] = useState('')
  const { visible, elementRef } = useOnScroll()
  const { visible: visibleSection4Image, elementRef: refSection4Image } = useOnScroll()
  const { visible: visibleSection5Image, elementRef: refSection5Image } = useOnScroll()
  const onOpen = (item: string) => {
    setOpen((currentItem) => {
      return currentItem === item ? '' : item
    })
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <AnimatedCursor
        innerSize={0}
        outerSize={50}
        outerScale={1.7}
        trailingSpeed={9}
        showSystemCursor
        outerStyle={{
          backgroundColor: 'transparent',
          border: '3px solid #fff',
          mixBlendMode: 'exclusion',
        }}
      />

      <DynamicHeader />

      <main>
        <section className="xl:w-[70%] xs:w-full mx-[auto] max-w-7xl xl:pl-0 xs:pl-[2rem]">
          <span className="flex items-center w-full justify-between xl:flex-nowrap  xs:flex-wrap animate__animated animate__bounce animate__fadeInDown animate__slow	1s">
            <h3 className={`${fontSizeBanner} `}>
              Creative
            </h3>
            <h3 className="xl:text-xl xs:text-xs 3xl:text-[1.5vh]">
              Somos uma agência de inteligência social,<br /><br />
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
            <h3 className="xl:text-xl 3xl:text-[2vh]">
              <Link href="https://www.instagram.com/agenciadrip/" target="_blank" >
                @agenciadrip
              </Link>
            </h3>
          </span>
          <span className="flex items-center  ml-[40px] gap-[30%] xl:flex-nowrap   xs:flex-wrap animate__animated animate__bounce animate__fadeInDown animate__slow	3s">
            <h3 className="xl:text-xl 3xl:text-[2vh]">
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
        <section className="bg-white text-black " id='projects' >
          <span ref={elementRef} className={`w-full flex items-center animate__animated animate__bounce ${visible ? 'animate__fadeInDown ' : ''} animate__slow	3s`}>
            <h2 id='work' className="font-bold xl:text-[10vw] xs:text-[20vw] bg-transparent " >
              WORK
            </h2>
            <span className='xl:w-[64%] xs:w-[45%] bg-gray-300 h-[2px] overflow-hidden ' />
          </span>
          <Carousel />
        </section >
        <section className="bg-white text-black"  >
          <div className="grid xl:grid-cols-2 xs:grid-cols-1 w-full h-full" >
            <div>
              <NextImage alt="carneiros" src="/static/images/carneiros.avif" />
            </div>
            <div ref={refSection4Image} className={`xl:p-[10rem] xs:p-[2rem] animate__animated animate__bounce  ${visibleSection4Image ? 'animate__fadeInRight' : ''}`}>
              <h2 className={`xl:text-[3.5rem] xs:text-[2rem] font-bold`}>
                Réveillon Carneiros 2023
              </h2>
              <h3 className={`xl:text-[2rem] xs:text-[1rem] my-[2rem]`}>Visual Identity</h3>
              <h3 className={`xl:text-[2.5rem] xs:text-[1.5rem]`}>
                O Réveillon Carneiros está indo para o seu quinto ano e se consolida como um dos maiores Réveillons do Brasil.
              </h3>
              <div className="xl:w-[80%] xs:w-[100%] grid justify-start mt-[2rem]">
                <DefaultButtonColorWhite >
                  <span className="flex">
                    <p className=" ml-[1rem]">
                      mais
                    </p>
                    <div className="h-[2rem] w-[2rem] -rotate-[90deg] ml-[1rem]">
                      <NextImage src="/static/images/arrow-down-black.svg" alt="arrow-down" className="arrow-black" />
                    </div>
                  </span>
                </DefaultButtonColorWhite>
              </div>
            </div>
            <div className={`bg-black text-white xl:p-[10rem] xs:p-[2rem]`}>
              <div ref={refSection5Image} className={`animate__animated animate__bounce  ${visibleSection5Image ? 'animate__fadeInLeft' : ''}`}>
                <h2 className={`xl:text-[3.5rem] xs:text-[2rem] font-bold`}>
                  Red Bull Pitaya
                </h2>
                <h3 className={`xl:text-[2rem] xs:text-[1rem] my-[2rem]`}>Visual Identity</h3>
                <h3 className={`xl:text-[2.5rem] xs:text-[1.5rem]`}>
                  A Red Bull realizou uma ação de marketing ativando os principais eventos de réveillon do Brasil para o lançamento do seu novo produto, o Red Bull Pitaya.
                </h3>
                <div className="xl:w-[80%] xs:w-[100%] grid justify-start mt-[2rem]">
                  <DefaultButtonColorBlack >
                    <span className="flex">
                      <p className=" ml-[1rem]">
                        mais
                      </p>
                      <div className="h-[2rem] w-[2rem] -rotate-[90deg] ml-[1rem]">
                        <NextImage src="/static/images/arrow-down.svg" alt="arrow-down" className="arrow-black" />
                      </div>
                    </span>
                  </DefaultButtonColorBlack>
                </div>
              </div>
            </div>
            <div>
              <NextImage alt="redbull-pitaya" src="/static/images/redbull-pitaya.avif" />
            </div>
            <div >
              <img className="max-w-[none] w-[100%] h-[100%] max-h-[50rem] object-cover" src={`https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww`} alt="arrow-down" />
            </div>
            <div className={`bg-white text-black xl:p-[10rem] xs:p-[2rem]`}>
              <div ref={refSection5Image} className={`animate__animated animate__bounce  ${visibleSection5Image ? 'animate__fadeInLeft' : ''} grid align-items-center `}>
                <h3 className={` ${fontSizeBanner} font-bold bg-transparent`} >
                  Menos do mesmo
                </h3>
                <h4 className="font-bold bg-transparent mt-[5px]  xl:text-2xl">
                  Nos movemos diferentes para aqueles que querem diferença
                </h4>
                <h5 className="xl:text-2xl my-[20px]">
                  Sem conversinha, terceirizamos todo seu marketing através de estratégias de marketing que vão muito além de rede social. Criamos uma imersão em experiência e resultado, nascemos  grandes e somos o dream team com as melhores mentes do mercado, prontos pra fazer seu negócio evoluir todos os dias.
                </h5>

                <div className="xl:w-[80%] xs:w-[100%] grid justify-start mt-[2rem]">
                  <DefaultButtonColorWhite>
                    Quero ter + resultados
                  </DefaultButtonColorWhite>
                </div>
              </div>
            </div>

          </div>
        </section >
        <section className="xl:w-[70%] xs:w-full mx-[auto] max-w-7xl xl:py-[6rem] xl:pl-0 xs:p-[2rem]">
          <div className={`
            flex
            items-start
            w-full
            justify-between
            xl:flex-nowrap
            xs:flex-wrap
            animate__animated
            animate__bounce
            animate__fadeInDown animate__slow	1s
            gap-y-[2rem]
          `}>
            <div className={`${fontSizeBanner} w-full grid font-bold`}>
              <h3>
                Evolua
              </h3>
              <h3>todos os </h3>
              <h3> dias com </h3>
              <h3>a gente</h3>
              <div className="xl:w-[80%] xs:w-[100%] grid justify-start mt-[2rem]">
                <DefaultButtonColorWhite>
                  Quero ter + resultados
                </DefaultButtonColorWhite>
              </div>
            </div>
            <ul className="w-full">
              {['assessoria de marketing', 'branding visual', 'lançamentos 360º', 'produção web'].map((item, index) => (
                <li key={`${item}-${index}`} className="cursor-[pointer]">
                  <div className="flex justify-between items-center" onClick={() => { onOpen(`${item}-${index}`) }}>
                    <h3 className="font-bold bg-transparent" style={{
                      fontSize: 'max(1.5rem, 1.75vw)'
                    }}>
                      {item}
                    </h3>

                    <div data-open={`${item}-${index}` === openItem} className={`
                        w-[3rem]
                        h-[3rem]
                        transition-all
                        duration-700
                        data-[open="true"]:rotate-[-180deg]
                      `}>

                      <NextImage src="static\images\arrow-down.svg" alt="arrow-down" />
                    </div>

                  </div>
                  <div
                    data-open={`${item}-${index}` === openItem}
                    className={`
                      h-0
                      grid
                      place-items-center
                      px-[5px]
                      data-[open="true"]:h-[12rem]
                      overflow-y-hidden
                      transition-all
                      duration-700
                      xl:text-[1.3rem]
                      xs:text-[1rem]
                      3xl:text-[1.2vh]
                    `}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>


        </section>
        <section className="w-full overflow-x-hidden xl:py-[8rem] xs:py-[2rem] bg-white">
          <ul className="flex" style={{
            animation: 'slide 10s linear infinite',

          }}>
            {links.map((item) => (
              <li
                key={item}
              >
                <img
                  src={item}
                  alt={`logo ${item}`}
                  className="h-[5rem] max-w-[10rem] mx-[1rem] object-contain basis-[100%] invert"
                />
              </li>
            ))}

          </ul>
        </section>
        <section id='contato' className="xl:w-[70%] xs:w-full mx-[auto] max-w-7xl py-[6rem] xl:pl-0 xs:pl-[2rem] gap-y-[2rem]">
          <div className={`
            flex
            items-start
            w-full
            justify-between
            xl:flex-nowrap
            xs:flex-wrap
            animate__animated
            animate__bounce
            animate__fadeInDown animate__slow	1s
            gap-y-[2rem]
          `}>
            <div className={`${fontSizeBanner} w-full grid items-start xs: font-[2.5rem] xl: font-[3rem] font-bold`}>
              <h3>
                Não deixe</h3>
              <h3>
                o marketing</h3>
              <h3>
                do seu</h3>
              <h3>
                negócio em</h3>
              <h3>
                2º plano</h3>
              <h4 className="text-lg mt-[2rem] xl:max-w-[60%] xs:max-w-[100%]  3xl:text-[1.2vh]">
                Preencha o formulário para receber uma proposta do nosso time comercial pelo WhatsApp.
              </h4>
            </div>
            <div className="w-[50%]">
              <iframe
                id="JotFormIFrame-240087678142662"
                title="Fake form test"
                allowTransparency
                allowFullScreen
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/240087678142662"
                style={{
                  minWidth: '100%',
                  height: '1000px',
                  border: 'none'
                }}
                scrolling="no"
              >
              </iframe>
            </div>
          </div>
        </section>
      </main >
      <footer className="xl:py-[5rem] xl:pl-[2rem] xs:p-[2rem] xl:max-w-7xl flex justify-center items-end mx-auto 3xl:text-[1.5vh]">
        <p className="w-full">
          Copyright © 2023 Agência Drip. Todos os direitos reservados.
        </p>
        <nav className="w-full grid justify-end">
          <Link href="/">
            <div className="h-[3rem] w-[3rem] rotate-[180deg]" aria-label="voltar ao top" title="voltar ao top">
              <NextImage src="static\images\arrow-down.svg" alt="arrow-down" />
            </div>
          </Link>
        </nav>
      </footer>
    </>
  )
}
