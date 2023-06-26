import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return <nav className="relative flex items-center justify-end w-full h-12 p-4">

        <Link href="https://www.linkedin.com/in/chris-yesso-18a09a191/" className="flex gap-1 p-1 text-xs font-medium border-b border-b-secondary text-primary active:text-white active:border-b-white">
            Leave me a suggestion
        <svg xmlns="http://www.w3.org/2000/svg" className="text-xs" width="12" height="12" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 19L19 6m0 0v12.48M19 6H6.52"/></svg>
        </Link>

    </nav>
}