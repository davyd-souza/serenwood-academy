'use client'

// DEPENDENCY
import { ComponentProps } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// COMPONENT
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from '@/components/NavigationMenu'

export function NavigationTabs() {
  return (
    <NavigationMenuRoot className="relative mt-6 hidden sm:block">
      <NavigationMenuList className="flex items-center gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <NavigationTabItem href="my-details">My details</NavigationTabItem>
        <NavigationTabItem href="password">Password</NavigationTabItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  )
}

// TYPE
type NavigationTabItemProps = ComponentProps<typeof Link>

function NavigationTabItem({
  href,
  children,
  ...props
}: NavigationTabItemProps) {
  const pathname = usePathname()
  const [, , path] = pathname.split('/')

  const isActive = path === href

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        active={isActive}
        className="relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none transition-colors hover:text-sky-600 disabled:cursor-not-allowed disabled:opacity-30 data-[active]:text-sky-600 dark:text-zinc-300 dark:hover:text-sky-300 dark:data-[active]:text-sky-300"
        asChild
      >
        <Link href={href} {...props}>
          {children}

          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600 dark:bg-sky-300"
            />
          )}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

// function NavigationItem() {
//   return (
//     <NavigationMenu.Item value="password">
//       <NavigationMenu.Link asChild>
//         <Link href="password">Password</Link>
//       </NavigationMenu.Link>
//     </NavigationMenu.Item>
//   )
// }

// title="My details"
// value="my-details"

// title="Password"
// value="password"

// title="Billing"
// value="billing"

// title="Email"
// value="email"

// title="Notifications"
// value="notifications"

// title="Integrations"
// value="integrations"
