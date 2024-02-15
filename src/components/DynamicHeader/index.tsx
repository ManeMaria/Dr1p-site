"use client"

import NextImage from '@/components/NextImage'
import { useMobileScreen, useToggleMenu } from '@/components/DynamicHeader/hooks'
const Logo = () => (
  <p className='text-2xl '>
    Agência Dr1p.
  </p>
);

const NavMenu = () => (
  <ul className="flex gap-10 ">
    <li>
      <a href="#">Início</a>
    </li>
    <li>
      <a href="#">Work</a>
    </li>
    <li>
      <a href="#">Contato</a>
    </li>
  </ul>
);


export function DynamicHeader() {
  const isMobile = useMobileScreen()
  const { isMenuOpen, toggleMenu } = useToggleMenu()


  return (
    <header className="w-full lg:pt-[5rem] xs:pt-[2rem] xl:mb-[5rem]">
      {isMobile ? (
        <>
          <span className="flex w-full justify-between pl-[2rem] align-end">
            <Logo />
            <button type='button' aria-label='menu' className='w-[3rem] h-[3rem]' onClick={toggleMenu}>
              <NextImage src="static\icons\burger-menu-right-svgrepo-com.svg" alt="menu" />
            </button>
          </span>
          <div data-menu-open={isMenuOpen} className={`transition-all h-0 overflow-hidden grid w-full place-items-center  data-[menu-open="true"]:h-[5rem] text-black bg-white`}>
            <NavMenu />
          </div>
        </>

      ) : (
        <nav className="flex justify-between w-[70%] mx-[auto]  max-w-7xl animate__animated animate__bounce animate__fadeIn animate__delay-2s text-2xl">
          <Logo />
          <NavMenu />
        </nav>
      )}
    </header>
  )
}
