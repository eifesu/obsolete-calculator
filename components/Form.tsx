"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import jobTitles from '@/jobs.json'
import { useRouter } from 'next/navigation'
import { slugify } from '@/utils/slug'
import { Button } from './Button'


const Form = () => {
    const [focused, setFocused] = React.useState(false)
    const [selected, setSelected] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [job, setJob] = React.useState("")
    const [suggestions, setSuggestions] = React.useState<string[]>([])

    const router = useRouter()



    React.useEffect(() => {
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



    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const query = e.target.value
        setJob(query)
    }

    async function submit(e: React.MouseEvent<HTMLButtonElement>) {
        setLoading(true)
        e.preventDefault()
        setTimeout(() => {
            router.push(`results/${slugify(job)}`)
        }, 2000);
    }


    return <>
        <div className="relative flex flex-col w-full gap-4">
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
            <Button loading={loading} variant="default" onClick={submit} type="submit" disabled={!selected}>
                                Calculate time left !
            </Button>
    </>

}

export default Form