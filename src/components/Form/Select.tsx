'use client'

// DEPENDENCY
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

// COMPONENT
import * as Select from '@radix-ui/react-select'
import * as ScrollArea from '@radix-ui/react-scroll-area'

// ASSET
import { Check, ChevronDown } from 'lucide-react'

// UTIL
import { cn } from '@/utils/cn'

const SelectRoot = Select.Root

const SelectGroup = Select.Group

const SelectValue = Select.Value

const SelectTrigger = forwardRef<
  ElementRef<typeof Select.Trigger>,
  ComponentPropsWithoutRef<typeof Select.Trigger>
>(({ className, children, ...props }, ref) => (
  <Select.Trigger
    ref={ref}
    className={cn(
      'relative flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none transition-colors focus:border-sky-400 focus:ring-4 focus:ring-sky-50 data-[placeholder]:text-zinc-600 dark:border-zinc-600 dark:shadow-zinc-700 dark:focus:border-sky-700 dark:focus:ring-sky-950 dark:data-[placeholder]:text-zinc-500',
      className,
    )}
    {...props}
  >
    {children}
    <Select.Icon asChild>
      <ChevronDown className="absolute right-2 h-5 w-5 text-zinc-500 dark:text-zinc-300" />
    </Select.Icon>
  </Select.Trigger>
))

SelectTrigger.displayName = Select.Trigger.displayName

const SelectContent = forwardRef<
  ElementRef<typeof Select.Content>,
  ComponentPropsWithoutRef<typeof Select.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <Select.Portal>
    <Select.Content
      ref={ref}
      className={cn(
        'group relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 dark:border-zinc-600 dark:bg-zinc-900 dark:shadow-zinc-700',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <ScrollArea.Root className="relative overflow-hidden" type="auto">
        <ScrollArea.Viewport className="h-full max-h-[20rem] w-full">
          <Select.Viewport>{children}</Select.Viewport>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="vertical"
          className="invisible flex w-2.5 touch-none select-none bg-zinc-100 p-0.5 group-hover:visible dark:bg-zinc-800"
        >
          <ScrollArea.Thumb className="before:left1/2 relative flex-1 rounded-lg bg-zinc-300 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-500" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Select.Content>
  </Select.Portal>
))

SelectContent.displayName = Select.Content.displayName

const SelectItem = forwardRef<
  ElementRef<typeof Select.Item>,
  ComponentPropsWithoutRef<typeof Select.Item>
>(({ className, children, ...props }, ref) => (
  <Select.Item
    ref={ref}
    className={cn(
      'flex items-center gap-2 px-3 py-2 transition-colors data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none dark:data-[highlighted]:bg-zinc-800',
      className,
    )}
    {...props}
  >
    <Select.ItemText>{children}</Select.ItemText>

    <Select.ItemIndicator className="ml-auto">
      <Check className="h-4 w-4 text-sky-600 dark:text-sky-300" />
    </Select.ItemIndicator>
  </Select.Item>
))

SelectItem.displayName = Select.Item.displayName

export {
  SelectRoot,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
}
