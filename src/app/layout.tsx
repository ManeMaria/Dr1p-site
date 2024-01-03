import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import dynamic from 'next/dynamic';

import './globals.css'
import 'animate.css';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], })

export const metadata: Metadata = {
  title: 'Agência Dr1p',
  description: 'Somos uma agência de inteligência social, que conecta pessoas, marcas e histórias.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
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
      <body className={`${notoSans.className} bg-black text-default`}>{children}</body>
    </html>
  )
}
