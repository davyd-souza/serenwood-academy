// COMPONENT
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { InputField, InputPrefix, InputRoot } from '@/components/Form/Input'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

// ASSET
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import { Navigation } from './Navigation'

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

          <Navigation />

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
