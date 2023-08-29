'use client'

// COMPONENT
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { NavItem } from './NavItem'

// ASSET
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

export function Navigation() {
  return (
    <ScrollArea.Root className="group relative overflow-hidden" type="auto">
      <ScrollArea.Viewport className="h-full w-full overflow-y-scroll">
        <nav className="space-y-1">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation="vertical"
        className="invisible flex w-2.5 touch-none select-none rounded-lg bg-zinc-100 p-0.5 group-hover:visible dark:bg-zinc-800"
      >
        <ScrollArea.Thumb className="before:left1/2 relative flex-1 rounded-lg bg-zinc-300 before:absolute before:top-1/2 before:h-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-zinc-500" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
