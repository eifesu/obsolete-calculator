"use client"
import React, { Fragment, useEffect, useState, useRef } from 'react'
import Modal from '@/components/Modal';
import jobTitles from '@/jobs.json'
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';

export default function Home() {
    let [isOpen, setIsOpen] = useState(false);
    let [job, setJob] = useState("");
    let [suggestions, setSuggestions] = useState<string[]>([])
    let [focused, setFocused] = useState(false)
    let [selected, setSelected] = useState(false)
    let [loaded, setLoaded] = useState(false)
    const router = useRouter()

    function slugify(text: string): string {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove non-word characters
            .replace(/[\s_-]+/g, '-') // Replace consecutive spaces, underscores, or dashes with a single dash
            .trim(); // Trim leading and trailing spaces

        // You can further customize the slugification process based on your requirements
    }


    useEffect(() => {
        if (jobTitles.some((title) => job === title)) {
            setSelected(true)
        } else {
            setSelected(false)
        }


        if (job.length > 2) {
            setSuggestions(jobTitles.filter((title) => title.toLowerCase().includes(job.toLowerCase())))
        } else {
            setSuggestions([])
        }

    }, [job])

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1000);
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query = e.target.value
        setJob(query)
    }

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        router.push(`results/${slugify(job)}`)
    }

    return (
        <>
            <AnimatePresence>
                {
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative flex flex-col items-center justify-start flex-1 select-none">
                        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
                            <span className="p-2 px-4 text-xs font-bold text-white bg-gray-900 border border-gray-800 rounded-full">Prepare your transition</span>
                            <h1 className='text-5xl font-bold text-center text-white'>When will AI <span className="text-primary">steal</span> my job ?</h1>
                            <p className='text-xs text-center text-white'>Artificial Intelligence is furiously growing in size and power, and you are not safe from it.</p>

                            <div className="relative w-full">
                                <div className="flex items-center w-full mt-4 border border-gray-800 rounded-lg bg-gray-950">
                                    <input required onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} type="text" value={job} onChange={handleChange} placeholder='Enter your job title...' className='w-full p-2 px-4 font-bold text-white bg-transparent placeholder:text-gray-800 focus:border-white focus:outline-none ' />
                                    <svg
                                        onClick={() => setJob("")}
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='mr-2 text-gray-800'><path fill="currentColor" d="m11.4 16l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4ZM3 12l4.35-6.15q.275-.4.713-.625T9 5h10q.825 0 1.413.588T21 7v10q0 .825-.588 1.413T19 19H9q-.5 0-.938-.225t-.712-.625L3 12Z" /></svg>
                                </div>
                                <AnimatePresence>
                                    {
                                        job.length < 3 && focused &&
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-2 overflow-x-hidden overflow-y-scroll font-bold text-white border rounded-lg bg-secondary top-full border-primary max-h-40">
                                            <div className='flex justify-between p-2 px-4 active:bg-background'>
                                                <p>Type more than 3 characters...</p>
                                            </div>

                                        </motion.div>
                                    }
                                    {suggestions.length > 0 && focused &&
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-10 w-full mt-2 overflow-x-hidden overflow-y-scroll font-bold text-white border rounded-lg bg-secondary top-full border-primary max-h-40">
                                            {suggestions.map(
                                                suggestion => <div
                                                    key={suggestion}
                                                    onClick={() => setJob(suggestion)}
                                                    className='flex justify-between p-2 px-4 active:bg-background'>
                                                    <p>{suggestion}</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 9l3 3l-3 3" /></svg>
                                                </div>
                                            )}

                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            <button disabled={!selected} type="submit" onClick={submit} className='w-full p-2 px-4 font-bold text-center text-white transition-all duration-300 ease-out rounded-full bg-primary active:bg-secondary active:text-primary disabled:opacity-20'>
                                Estimate my time left !
                            </button>
                        </div>
                    </motion.main>
                }
            </AnimatePresence>
        </>
    )
}
