"use client"
import React, { Fragment, useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '@/components/Loading';
import jobsTitles from '@/jobs.json'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home({ params }: { params: { job: string } }) {
    const [loaded, setLoaded] = useState(false)
    const [status, setStatus] = useState("Making sure this job exists")
    const [answer,setAnswer] = useState<Answer>()
    const router = useRouter()

    
    function slugify(text: string): string {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove non-word characters
            .replace(/[\s_-]+/g, '-') // Replace consecutive spaces, underscores, or dashes with a single dash
            .trim(); // Trim leading and trailing spaces

        // You can further customize the slugification process based on your requirements
    }


    function unslugify(slug: string): string {
        return slug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      
        // You can add additional logic to handle special cases or exceptions
      }
      

    useEffect(() => {
        async function validate() {
            if(jobsTitles.some( title => slugify(title) === params.job)) {
                ask()
            } else {
                router.push('/')
            }
        }
        async function ask() {
            setStatus("Kindly asking ChatGPT")
            const res = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify(params.job)
            })
            const json : Answer = await res.json().then(
            )
            if(json) {
                setAnswer(json)
            }
        }
        
        validate()

    },[params.job, router])

    return (
        <>
            <AnimatePresence>
                {
                    !answer ?
                        <Loading status={status}/>
                        :
                        <motion.main
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative flex flex-col items-center justify-start flex-1 select-none">
                            <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-8">
                                <span className="p-2 px-4 text-xs font-bold text-white bg-gray-900 border border-gray-800 rounded-full">You have an estimated</span>
                                <h1 className='text-4xl font-bold text-center text-white'>{answer.yearsLeft} years</h1>
                                <p className='text-xs text-center text-white'>before AI can replace you as a </p>
                                <p className='-mt-1 font-bold text-white text-md'>{params.job.toUpperCase()}</p>

                                <div className="flex flex-col w-full gap-2 mt-4">
                                    <div className="flex items-center justify-between w-full p-3 border rounded-lg border-green-primary bg-green-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.advantage1}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='text-green-primary '><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.121l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12l5.657-5.658Z" /></g></svg>
                                    </div>
                                    <div className="flex items-center justify-between w-full p-3 border rounded-lg border-green-primary bg-green-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.advantage2}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='text-green-primary '><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.121l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12l5.657-5.658Z" /></g></svg>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full gap-2 mt-4">
                                    <div className="flex items-center justify-between w-full p-3 border rounded-lg border-red-primary bg-red-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.disadvantage1}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='text-red-primary '><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.121l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12l5.657-5.658Z" /></g></svg>
                                    </div>
                                    <div className="flex items-center justify-between w-full p-3 border rounded-lg border-red-primary bg-red-secondary">
                                        <p className='text-xs font-medium text-white'>{answer.disadvantage2}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='text-red-primary '><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.121l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12l5.657-5.658Z" /></g></svg>
                                    </div>
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
