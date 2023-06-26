"use client"
import React, { Fragment, useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '@/components/Loading';
import jobsTitles from '@/jobs.json'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { slugify } from '@/utils/slug';

export default function Home({ params }: { params: { job: string } }) {
    const [status, setStatus] = useState("Making sure this job exists")
    const [answer, setAnswer] = useState<Answer>()
    const router = useRouter()


    useEffect(() => {
        async function validate() {
            if (jobsTitles.some(title => slugify(title) === params.job)) {
                ask()
            } else {
                router.push('/')
            }
        }
        async function ask() {
            setStatus("Kindly asking ChatGPT")
            const res = await fetch('/api/gpt', {
                method: 'POST',
                body: JSON.stringify(params.job)
            })
            const json: Answer = await res.json().then(
            )
            if (json) {
                setAnswer(json)
            }
        }

        validate()

    }, [params.job, router])

    return (
        <>
            <AnimatePresence>
                {
                    !answer ?
                        <Loading status={status} />
                        :
                        <motion.main
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative flex flex-col items-center justify-start flex-1 select-none">
                            <div className="flex flex-col items-center justify-center w-full h-full gap-1 p-6 py-2">
                                <span className="p-2 px-4 text-xs font-bold text-white bg-gray-900 border border-gray-800 rounded-full">You have an estimated</span>
                                <h1 className='text-3xl font-bold text-center text-white'>{answer.yearsLeft} years</h1>
                                <p className='-mt-1 text-xs text-center text-white'>before AI can replace you as a <span className="font-bold text-md">{params.job.toUpperCase()}</span></p>

                                <div className="flex flex-col w-full gap-4 mt-4">
                                    <div className="flex items-center justify-between w-full gap-2 p-3 border rounded-lg border-green-primary bg-green-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.advantages}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='text-green-primary'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7l-5.846 5.938c-.105.106-.158.16-.205.202c-.76.68-1.907.68-2.667 0a4.814 4.814 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0a4.86 4.86 0 0 0-.204.202L4 17M20 7v6m0-6h-6" /></svg>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full gap-4 mt-2">
                                    <div className="flex items-center justify-between w-full gap-2 p-3 border rounded-lg border-red-primary bg-red-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.disadvantages}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='text-red-primary'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 17l-5.846-5.938a4.945 4.945 0 0 0-.205-.202a1.999 1.999 0 0 0-2.667 0c-.047.042-.1.096-.205.203c-.105.106-.158.16-.205.202a2 2 0 0 1-2.667 0A4.898 4.898 0 0 1 8 11.062L4 7m16 10v-6m0 6h-6" /></svg>
                                    </div>
                                </div>



                                <p className='mt-4 text-xs text-center text-white'>You should become a </p>
                                <h1 className='-mt-1 text-2xl font-bold text-center text-white'>{answer.reconversion}</h1>
                                <div className="flex items-center justify-between w-full gap-2 p-3 border rounded-lg border-primary bg-secondary">
                                    <p className='text-xs font-medium text-white'>{answer.desc}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className='text-primary'><path fill="currentColor" d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93l-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8l-13 56.24A20 20 0 0 0 79 233.1l49-29.76l49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24l43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32l-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23l50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z"/></svg>
                                </div>
                                <Link href="/" className='w-full p-2 px-4 mt-4 font-bold text-center text-white transition-all duration-300 ease-out rounded-full bg-primary active:bg-secondary active:text-primary disabled:opacity-20'>
                                    Try again
                                </Link>
                            </div>
                        </motion.main>
                }
            </AnimatePresence>

        </>
    )
}
