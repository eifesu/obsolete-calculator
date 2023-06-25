
"use client"
import {AnimatePresence, motion} from 'framer-motion'
import Header from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'

function Loading() {

}
export default function Wrapper(props : any) {
    let [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [props])

    return (
        <AnimatePresence>
        {
            loading ? (<motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            className="flex flex-col items-center justify-center flex-1 w-full h-full select-none bg-background">
            <img src="/ellipsis.png" alt="Slanted halo" className="" width={20} height={20} />
        </motion.div>) : <>
            {props.children}
            <Footer />
            </>
        }

        </AnimatePresence>
    )
}