// DEPENDENCY
import { cn } from '@/utils/cn'
import { ComponentProps, forwardRef } from 'react'

// COMPONENT
import { Slot } from '@radix-ui/react-slot'

// TYPE
type InputRootProps = ComponentProps<'div'>

export function InputRoot({ children, className }: InputRootProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-600',
        className,
      )}
    >
      {children}
    </div>
  )
}

// TYPE
type InputPrefixProps = ComponentProps<'div'> & {
  asChild?: boolean
}

export const InputPrefix = forwardRef<HTMLDivElement, InputPrefixProps>(
  function InputPrefix(props, ref) {
    const { asChild, ...rest } = props

    const Component = asChild ? Slot : 'div'

    return <Component {...rest} ref={ref} />
  },
)

// TYPE
type InputFieldProps = ComponentProps<'input'>

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    return (
      <input
        {...props}
        ref={ref}
        className="w-full bg-transparent p-0 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-500"
      />
    )
  },
)
