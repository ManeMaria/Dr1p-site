import { DynamicHeader } from "@/components";
import NextImage from "@/components/NextImage";
import Link from "next/link";

const fontSizeBanner = 'xs:text-[3rem] xl:text-[5vw]';
export default function Home() {
  return (
    <>
      <DynamicHeader />
      <main >
        <section className="xl:w-[60%] xs:w-full mx-[auto]  max-w-[2xl] xl:pl-0 xs:pl-[2rem]">
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
          <div className="mx-[auto] my-[3rem] w-[3rem] h-[3rem]">
            <NextImage src="static\images\arrow-down.svg" alt="arrow-down" />
          </div>
        </section>
        <section>
          <h2>
            WORK
          </h2>
        </section>
      </main>
      <footer>

        <p>
          Copyright © 2023 Agência Drip. Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}
