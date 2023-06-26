"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Form from "@/components/Form"

export default function Home() {


    return (
        <>
            <AnimatePresence>
                {
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative flex flex-col items-center justify-start flex-1 select-none">
                        {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
                            <span className="p-2 px-4 text-xs font-bold text-white bg-gray-900 border border-gray-800 rounded-full">Prepare your transition</span>
                            <h1 className='text-5xl font-bold text-center text-white'>When will AI <span className="text-primary">steal</span> my job ?</h1>
                            <p className='text-xs text-center text-white'>Artificial Intelligence is furiously growing in size and power, and you are not safe from it.</p>
                            <Form />
                        </div>
                    </motion.main>
                }
            </AnimatePresence>
        </>
    )
}
