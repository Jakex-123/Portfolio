
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/Context/ThemeProvider'
import SmoothScrolling from './lib/Scroll';



const inter = Inter({ subsets: ['latin'] })

// metadata.js

export const metadata:Metadata = {
  title: 'Aditya Gupta',
  description: 'A full-stack developer specializing in modern technologies. Explore dynamic projects focused on performance, scalability, and user-centric design.',
  keywords: 'Full-stack developer, React, Node.js, Tailwind CSS, TypeScript, Web development, UI/UX design, Scalable applications, Interactive interfaces, Modern web technologies, API development, Responsive design, Frontend development, Backend development, High-performance applications',
  robots: 'index, follow',
  creator:"Aditya Gupta",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
<link rel="manifest" href="/icons/site.webmanifest"/>
<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
<link rel="shortcut icon" href="/icons/favicon.ico"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="msapplication-config" content="/icons/browserconfig.xml"/>
<meta name="theme-color" content="#ffffff"/>
        <script async src="https://kit.fontawesome.com/c8e316ce73.js" crossOrigin="anonymous"></script>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

      </head>
      <body className={`${inter.className} bg-lightPrimaryBg text-lightPrimaryText dark:bg-primaryBg dark:text-primaryText`}>
        <SmoothScrolling>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  )
}

