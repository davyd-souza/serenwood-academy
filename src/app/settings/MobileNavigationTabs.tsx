'use client'

// DEPENDENCY
import { usePathname } from 'next/navigation'

// COMPONENT
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/NavigationMenu'
import Link from 'next/link'
import { Check } from 'lucide-react'

const components: { [title: string]: string } = {
  'my-details': 'My details',
  password: 'Password',
}

export function MobileNavigationTabs() {
  const pathname = usePathname()
  const [, , path] = pathname.split('/')

  return (
    <NavigationMenuRoot
      defaultValue={components[path]}
      className="relative mt-6 sm:hidden"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full rounded-lg border border-zinc-300 shadow-sm outline-none transition-colors dark:border-zinc-600 dark:shadow-zinc-700">
            {components[path]}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute z-50 mt-2 flex w-full flex-col overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm dark:border-zinc-600 dark:bg-zinc-900 dark:shadow-zinc-700">
            {Object.entries(components).map(([href, title]) => {
              const isActive = path === href

              return (
                <NavigationMenuLink
                  className="relative flex items-center px-3 py-2 transition-colors hover:bg-zinc-50 data-[active]:text-sky-600 dark:hover:bg-zinc-800 dark:data-[active]:text-sky-300"
                  key={title}
                  active={isActive}
                  asChild
                >
                  <Link href={href}>
                    {title}
                    {isActive && (
                      <Check className="absolute right-2 h-4 w-4 text-sky-600 dark:text-sky-300" />
                    )}
                  </Link>
                </NavigationMenuLink>
              )
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  )
}
