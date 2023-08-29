// COMPONENT
import { InputField, InputPrefix, InputRoot } from '@/components/Form/Input'
import { Logo } from '../Logo'
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
    <aside className="z-20 hidden w-80 border-r border-zinc-200 px-5 py-8 dark:border-zinc-800 lg:fixed lg:inset-0 lg:flex lg:flex-col lg:gap-6">
      <Logo />

      <InputRoot className="mx-3">
        <InputPrefix asChild>
          <Search className="h-5 min-h-max w-5 min-w-max text-zinc-500 dark:text-zinc-400" />
        </InputPrefix>
        <InputField type="text" placeholder="Search" />
      </InputRoot>

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

        <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

        <Profile />
      </div>
    </aside>
  )
}
