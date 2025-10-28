import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      primary: 'btn-shine bg-gradient-to-r from-primary to-primary-light text-white shadow-[0_8px_30px_rgba(124,58,237,0.25)] hover:shadow-[0_8px_50px_rgba(34,211,238,0.35)] focus:ring-primary-light',
      secondary: 'bg-white/70 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 text-gray-900 dark:text-gray-100 border border-white/40 dark:border-white/10 backdrop-blur',
      outline: 'border-2 border-primary/60 text-primary hover:bg-primary hover:text-white dark:border-primary-light/60 dark:text-primary-light focus:ring-primary-light',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
