import { Box } from '@mantine/core'
import Image from 'next/image'
import logo from "../../../../public/logo.webp"
import { IconCheck } from '@tabler/icons-react'

export default function ThankYou() {
  return (
        <Box className='min-h-[70dvh] flex item-center justify-center flex-col gap-10'>
            <Image src={logo.src} width={50} height={50} alt="Trust logo" className='mx-auto'/>
            <IconCheck className='mx-auto bg-green-500 rounded-full' size={80} color='white'/>
            <p className='md:text-6xl text-4xl text-secondary-700 text-center'>Application Submitted Successfully.</p>
            <p className='md:text-4xl text-2xl text-center'>We will get back to you shortly after reviewing your documents.</p>
        </Box>
  )
}
