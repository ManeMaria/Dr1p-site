import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import 'animate.css';



const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], })
console.log('process.env.VERCEL_URL :>> ', process.env.VERCEL_URL);
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
      <body className={`${notoSans.className} bg-black text-default`}>{children}</body>
    </html>
  )
}
