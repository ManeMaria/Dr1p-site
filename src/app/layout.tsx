import type { Metadata } from 'next'
import Head from 'next/head';
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
  icons: {
    icon: [
      {
        url: 'favicon.ico',
        href: 'favicon.ico',
      }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Agência Dr1p',
    description: 'Somos uma agência de inteligência social, que conecta pessoas, marcas e histórias.',
    url: `${process.env.VERCEL_URL}/`,
    siteName: 'Next.js',
    images: [
      {
        url: 'static/images/Screenshot_1.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      }
    ],
    locale: 'pt-BR',
    type: 'website',

  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='scroll-smooth'>
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
      <body className={`${notoSans.className} bg-black text-default`}>{children}</body>
    </html>
  )
}
