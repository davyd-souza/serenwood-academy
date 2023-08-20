'use client'

// DEPENDENCY
import { ComponentProps } from 'react'
import { motion } from 'framer-motion'

// COMPONENT
import * as Tabs from '@radix-ui/react-tabs'

// TYPE
type TabItemProps = ComponentProps<typeof Tabs.Trigger> & {
  title: string
  isSelected?: boolean
}

export function TabItem({
  title,
  value,
  isSelected = false,
  ...props
}: TabItemProps) {
  return (
    <Tabs.Trigger
      {...props}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 transition-colors enabled:hover:text-sky-500 disabled:cursor-not-allowed disabled:opacity-30 data-[state=active]:text-sky-500 dark:text-zinc-300 enabled:dark:hover:text-sky-300 dark:data-[state=active]:text-sky-300"
      value={value}
    >
      <p>{title}</p>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-sky-500 dark:bg-sky-300"
        />
      )}
    </Tabs.Trigger>
  )
}
