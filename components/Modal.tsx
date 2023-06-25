import { motion, AnimatePresence, Variants } from 'framer-motion'

export default function Modal(props: { isOpen: boolean, setIsOpen: any }) {
    return <>
        <AnimatePresence>
            {
                props.isOpen &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-20 flex items-center justify-center w-screen h-screen p-4">
                    <motion.div
                        onClick={() => props.setIsOpen(false)}
                        className="fixed inset-0 z-0 flex items-center justify-center w-full h-full opacity-90 bg-background" />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}                        
                        className="z-10 flex flex-col items-center max-w-lg gap-4 p-6 text-center text-white border border-gray-800 rounded-lg bg-gray-950">
                        <span className="text-xl font-bold text-white">Information</span>
                        <p className="text-xs opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vitae commodi quisquam ratione repudiandae ab, iusto excepturi suscipit modi dolore.</p>
                        <button
                            onClick={() => props.setIsOpen(false)}
                            className="flex gap-2 p-2 px-4 text-xs font-bold text-white rounded-full bg-primary active:bg-secondary">Dismiss <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 7l10 10M7 17L17 7" /></svg></button>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </>
}