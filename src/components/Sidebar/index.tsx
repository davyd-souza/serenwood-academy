// COMPONENT
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

// ASSET
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 dark:border-zinc-700">
      <Logo />

      <div className="mx-3 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-600">
        <Search className="h-5 min-h-max w-5 min-w-max text-zinc-500 dark:text-zinc-400" />
        <input
          type="text"
          className="w-full bg-transparent p-0 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-500"
          placeholder="Search"
        />
      </div>

      <nav className="space-y-1">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto grid gap-6">
        <nav>
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

        <Profile />
      </div>
    </aside>
  )
}
