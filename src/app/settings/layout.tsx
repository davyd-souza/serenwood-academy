// DEPENDENCY
import { ReactNode } from 'react'

// COMPONENT
import { NavigationTabs } from './NavigationTabs'
import { MobileNavigationTabs } from './MobileNavigationTabs'

// TYPÈ

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="text-xl font-medium sm:text-3xl">Settings</h1>

      <NavigationTabs />
      <MobileNavigationTabs />

      {children}
    </>
  )
}
