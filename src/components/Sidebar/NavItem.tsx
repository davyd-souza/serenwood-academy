// DEPENDENCY
import { ElementType } from 'react'

// ASSET
import { ChevronDown } from 'lucide-react'

// TYPE
type NavItemProps = {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group/nav-item flex items-center gap-3 rounded-md px-3 py-2 outline-none transition-colors hover:bg-sky-50 focus-visible:bg-sky-50 dark:hover:bg-zinc-800 dark:focus-visible:bg-sky-950"
    >
      <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      <span className="font-medium transition-colors group-hover/nav-item:text-sky-500 group-focus-visible:text-sky-500 dark:group-hover/nav-item:text-sky-300 dark:group-focus-visible:text-sky-300">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-500 transition-colors group-hover/nav-item:text-sky-300 group-focus-visible:text-sky-300 dark:text-zinc-400 dark:group-hover/nav-item:text-sky-200 dark:group-focus-visible:text-sky-200" />
    </a>
  )
}
