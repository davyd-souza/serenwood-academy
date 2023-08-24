'use client'

// DEPENDENCY
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

// COMPONENT
import { TabItem } from './TabItem'
import { MyDetailsTab } from './MyDetailsTab'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  const handleTabChange = (newTab: string) => {
    setCurrentTab(newTab)
  }

  return (
    <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
      <Tabs.List className="flex items-center gap-4 border-b border-zinc-200 dark:border-zinc-800">
        <TabItem
          title="My details"
          value="my-details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          title="Password"
          value="password"
          isSelected={currentTab === 'password'}
        />
        <TabItem title="Team" value="team" isSelected={currentTab === 'team'} />
        <TabItem title="Plan" value="plan" isSelected={currentTab === 'plan'} />
        <TabItem
          title="Billing"
          value="billing"
          isSelected={currentTab === 'billing'}
        />
        <TabItem
          title="Email"
          value="email"
          isSelected={currentTab === 'email'}
        />
        <TabItem
          title="Notifications"
          value="notifications"
          isSelected={currentTab === 'notifications'}
        />
        <TabItem
          title="Integrations"
          value="integrations"
          isSelected={currentTab === 'integrations'}
        />
      </Tabs.List>
      <Tabs.Content value="my-details">
        <MyDetailsTab />
      </Tabs.Content>
    </Tabs.Root>
  )
}
