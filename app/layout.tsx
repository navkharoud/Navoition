import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navotion',
  description: 'Taking notes faster',
  icons:{
    icon:[
      {
        media:'(prefers-color-scheme: light)',
        url: '/Notion.png',
        href:'/Notion.png',
      },
      {
        media:'(prefers-color-scheme: dark)',
        url: '/Notion.png',
        href:'/Notion.png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
       attribute='class'
       defaultTheme='system'
       enableSystem
       disableTransitionOnChange
       storageKey='navotion-theme-2'>
        {children}
       </ThemeProvider>
        </ConvexClientProvider>
       
      
        </body>
    </html>
  )
}

//group files reflet the entire project 
//reflects every single route and layout 
//can be grouped inside a folder too 
// put a reusable layout 