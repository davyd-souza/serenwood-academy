'use client'

// DEPENDENCY
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

// COMPONENT
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

// ASSET
import { ChevronDown } from 'lucide-react'

// UTIL
import { cn } from '@/utils/cn'

const NavigationMenuRoot = forwardRef<
  ElementRef<typeof NavigationMenu.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenu.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenu.Root ref={ref} className={cn('', className)} {...props}>
    {children}
  </NavigationMenu.Root>
))
NavigationMenuRoot.displayName = NavigationMenu.Root.displayName

const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenu.List>,
  ComponentPropsWithoutRef<typeof NavigationMenu.List>
>(({ className, ...props }, ref) => (
  <NavigationMenu.List ref={ref} className={cn('', className)} {...props} />
))
NavigationMenuList.displayName = NavigationMenu.List.displayName

const NavigationMenuItem = NavigationMenu.Item

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenu.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenu.Trigger
    ref={ref}
    className={cn('inline-flex items-center px-4 py-2', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDown className="absolute right-2 h-5 w-5 text-zinc-500 dark:text-zinc-300" />
  </NavigationMenu.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenu.Trigger.displayName

const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenu.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenu.Content ref={ref} className={cn('', className)} {...props} />
))
NavigationMenuContent.displayName = NavigationMenu.Content.displayName

const NavigationMenuLink = NavigationMenu.Link

export {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
}
