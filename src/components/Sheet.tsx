'use client'

// DEPENDENCY
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

// COMPONENT
import * as SheetPrimitive from '@radix-ui/react-dialog'

// ASSET
import { X } from 'lucide-react'

// LIB
import { cn } from '@/utils/cn'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({
  className,
  ...props
}: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props} />
)

SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = forwardRef<
  ElementRef<typeof SheetPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-zinc-900/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in',
      className,
    )}
    {...props}
    ref={ref}
  />
))

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = tv({
  base: 'fixed z-50 gap-4 bg-zinc-50 dark:bg-zinc-950 p-6 shadow-md transition data-[state=open]:animate-in data-[state=closed]:animate-out border-zinc-200 dark:border-zinc-800',

  variants: {
    side: {
      top: 'inset-x-0 top-0 boder-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      bottom:
        'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
      right:
        'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
    },
  },

  defaultVariants: { side: 'right' },
})

type SheetContentProps = ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> &
  VariantProps<typeof sheetVariants>

const SheetContent = forwardRef<
  ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side, className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={sheetVariants({ side, className })}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-zinc-950 transition-opacity hover:opacity-100 focus:ring-sky-500 focus-visible:outline-none focus-visible:ring-2">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))

SheetContent.displayName = SheetPrimitive.Content.displayName

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
}
