import {ButtonHTMLAttributes, FC} from 'react'
import {cva, VariantProps} from 'class-variance-authority'
import { cn } from '@/utils/tailwind'

const buttonVariants = cva(
    'w-full p-2 px-4 font-bold text-center transition-all duration-300 ease-out rounded-full disabled:opacity-20 flex items-center justify-center',
    {
        variants: {
            variant: {
                default: "text-white bg-primary active:bg-secondary active:text-primary",
                secondary: "",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }

)

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    loading: boolean
}   

const Button : FC<Props>= ({className, variant,loading, ...props}) => {
    return <button className={cn(buttonVariants({variant}))} {...props}>
        {loading ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
        : props.children
    }
    </button>
}

export {Button, buttonVariants}