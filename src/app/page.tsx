'use client';

import Link from "next/link";

import { Carousel, DefaultButton, DynamicHeader, LabelButton } from "@/components";
import NextImage from "@/components/NextImage";
import { useOnScroll } from "@/hooks";
import { useState } from "react";
import { links } from "./data/urlsIcons";


const fontSizeBanner = 'xs:text-[3rem] xl:text-[5.3vw]';

export default function Home() {
  const [openItem, setOpen] = useState('')
  const { visible, elementRef } = useOnScroll()
  const { visible: visibleSection3Image, elementRef: refSection3Image } = useOnScroll()

  const onOpen = (item: string) => {
    console.log('currentItem', item)
    setOpen((currentItem) => {
      console.log('currentItem', currentItem, currentItem === item ? '' : item)
      return currentItem === item ? '' : item
    })
  }
  return (
    <>
      <DynamicHeader />
      <main>
        <section className="h-[90vh] xl:w-[70%] xs:w-full mx-[auto]  max-w-[2xl] xl:pl-0 xs:pl-[2rem]">
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
        <section className="bg-white text-black " id='projects' >
          <span ref={elementRef} className={`w-full flex items-center animate__animated animate__bounce ${visible ? 'animate__fadeInDown ' : ''} animate__slow	3s`}>
            <h2 className="font-bold xl:text-[10vw] xs:text-[20vw] bg-transparent " >
              WORK
            </h2>
            <span className='xl:w-[64%] xs:w-[45%] bg-gray-300 h-[2px] overflow-hidden ' />
          </span>
          <Carousel />
          <div className="flex items-center justify-end pr-[10%] w-full items-center text-[1.6rem]">
            <p>confira nossos cases </p>
            <span className="-rotate-[90deg]">
              <LabelButton />
            </span>
          </div>
        </section >
        <section className="bg-white text-black h-[100vdh] py-[4rem]">
          <div className="grid xl:grid-cols-2 xs:grid-cols-1">
            <div ref={refSection3Image} className={`xl:w-[80%] xs:w-[100%]  h-[80%]  animate__animated animate__bounce ${visibleSection3Image ? 'animate__fadeInLeft' : ''} animate__slow	3s`} >
              <img className="max-w-[none] w-[100%] h-[100%] object-cover" src={`https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww`} alt="arrow-down" />
            </div>
            <span className={`w-[100%]
              flex
              flex-col
              justify-center
              w-full
              xl:pl-0
              xs:pl-[2rem]
              animate__animated
              animate__bounce
              ${visibleSection3Image ? 'animate__fadeInRight' : ''}
              animate__slow	3s`}>
              <h3 className="font-bold xl:text-[4vw] xs:text-[10vw] bg-transparent uppercase" >
                Menos do mesmo
              </h3>
              <h4 className="font-bold bg-transparent my-[5px]">
                Nos movemos diferentes para aqueles que querem diferença
              </h4>
              <h5>
                Sem conversinha, terceirizamos todo seu marketing através de estratégias de marketing que vão muito além de rede social. Criamos uma imersão em experiência e resultado, nascemos  grandes e somos o dream team com as melhores mentes do mercado, prontos pra fazer seu negócio evoluir todos os dias.
              </h5>
            </span>
          </div>
        </section>
        <section className="min-h-[100vh] xl:w-[70%] xs:w-full mx-[auto] max-w-[2xl] py-[6rem] xl:pl-0 xs:pl-[2rem]">
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
            <div className={`${fontSizeBanner} w-full grid `}>
              <h3>
                Evolua
              </h3>
              <h3>todos os </h3>
              <h3> dias com </h3>
              <h3>a gente</h3>
              <div className="xl:w-[80%] xs:w-[100%] grid justify-start mt-[2rem]">
                <DefaultButton>
                  Quero ter + resultados
                </DefaultButton>
              </div>
            </div>
            <ul className="w-full ">
              {['assessoria de markegin', 'branding visual', 'lançamentos 360º', 'produção web'].map((item, index) => (
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
        <section className="w-full overflow-x-hidden py-[8rem] bg-white">
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
        <section className="min-h-[100vh] xl:w-[70%] xs:w-full mx-[auto] max-w-[2xl] py-[6rem] xl:pl-0 xs:pl-[2rem] gap-y-[2rem]">
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
            <div className={`${fontSizeBanner} w-full grid items-start`}>
              <h3 style={{
                fontSize: 'max(2.5rem,4vw)'
              }}>
                Não deixe</h3>
              <h3 style={{
                fontSize: 'max(2.5rem,4vw)'
              }}>
                o marketing</h3>
              <h3 style={{
                fontSize: 'max(2.5rem,4vw)'
              }}>
                do seu</h3>
              <h3 style={{
                fontSize: 'max(2.5rem,4vw)'
              }}>
                negócio em</h3>
              <h3 style={{
                fontSize: 'max(2.5rem,4vw)'
              }}>
                2º plano</h3>
              <h4 className="text-[1rem] mt-[2rem]">
                Preencha o formulário para receber uma proposta do nosso time comercial pelo WhatsApp.
              </h4>
            </div>
            <div className="w-full bg-red-400 grid place-items-center bg-red-400">
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
      <footer className="xl:py-[5rem] xl:pl-[2rem] xs:p-[2rem]">
        <p>
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
