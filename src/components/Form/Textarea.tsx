// DEPENDENCY
import { TextareaHTMLAttributes, forwardRef } from 'react'

// UTIL
import { cn } from '@/utils/cn'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'min-h-[120px] w-full rounded-lg border border-zinc-300 bg-transparent px-3 py-2 placeholder-zinc-600 shadow-sm outline-none transition-colors focus-visible:border-sky-400 focus-visible:ring-4 focus-visible:ring-sky-50 dark:border-zinc-600 dark:placeholder-zinc-500 dark:shadow-zinc-700      dark:focus-visible:border-sky-700 dark:focus-visible:ring-sky-950',
      className,
    )}
    ref={ref}
    {...props}
  />
))

Textarea.displayName = 'Textarea'

export { Textarea }
