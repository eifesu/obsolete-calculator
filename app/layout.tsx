import Header from '@/components/Header'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Overtake Estimator',
    description: 'A web app to estimate when AI will take your job',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="" className="relative flex items-center justify-center min-h-full select-none bg-background">
            <body className={inter.className + " min-h-full flex flex-col max-w-2xl"}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
