"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function Loading(props: {status: string}) {
    return <>
        { 
                <motion.div
                    className="flex flex-col items-center justify-center flex-1 w-full h-full gap-2 select-none bg-background">
                    <Image src="/ellipsis.png" alt="Slanted halo" className="animate-bounce" width={20} height={20} />
                    <p className="font-medium text-white">{props.status}...</p>
                </motion.div>}
    </> }