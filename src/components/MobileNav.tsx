'use client'

// COMPONENT
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { InputField, InputPrefix, InputRoot } from '@/components/Form/Input'
import { NavItem } from './Sidebar/NavItem'
import { Profile } from './Sidebar/Profile'
import { UsedSpaceWidget } from './Sidebar/UsedSpaceWidget'

// ASSET
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

export function MobileNav() {
  return (
    <aside className="flex border-b border-zinc-200 p-4 dark:border-zinc-800 lg:hidden">
      <Logo />

      <Sheet>
        <SheetTrigger asChild>
          <Button className="ml-auto" variant="ghost">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex w-[400px] flex-col">
          <InputRoot className="mx-3">
            <InputPrefix asChild>
              <Search className="h-5 min-h-max w-5 min-w-max text-zinc-500 dark:text-zinc-400" />
            </InputPrefix>
            <InputField type="text" placeholder="Search" />
          </InputRoot>

          <ScrollArea.Root
            className="group relative overflow-hidden"
            type="auto"
          >
            <ScrollArea.Viewport className="h-full w-full overflow-y-scroll">
              <nav className="space-y-1">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
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

          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="mt-auto grid gap-6">
            <nav>
              <NavItem title="Support" icon={LifeBuoy} />
              <NavItem title="Settings" icon={Cog} />
            </nav>

            <UsedSpaceWidget />

            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

            <Profile />
          </div>
        </SheetContent>
      </Sheet>
    </aside>
  )
}
