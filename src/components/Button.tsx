// DEPENDENCY
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

// COMPONENT
import { Slot } from '@radix-ui/react-slot'

// VARIANT
const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-medium transition-all outline-none shadow-sm dark:shadow-zinc-700',
    'focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-300',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'bg-sky-500 text-zinc-100 hover:bg-sky-400 dark:bg-sky-300 dark:text-zinc-900 dark:hover:bg-sky-200',
      outline:
        'border border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800',
      ghost:
        'p-2 shadow-none hover:bg-zinc-100 focus-visible:bg-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800',
    },
  },

  defaultVariants: { variant: 'primary' },
})

// TYPE
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    asChild?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp ref={ref} className={button({ variant, className })} {...props} />
    )
  },
)

Button.displayName = 'Button'

export { Button }
