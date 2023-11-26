import Footer from '@/shared/components/footer/footer'
import { Header } from '@/shared/components/header/header'
import type { ReactNode } from 'react'
import { Notifications } from "@mantine/notifications"

export default function Home({ children }: {children: ReactNode}) {
  return (
    <>
    
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
