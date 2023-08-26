'use client'

// DEPENDENCY
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

// COMPONENT
import { ListItem } from './ListItem'

export function FileInputList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map(({ name, size }) => (
        <ListItem key={name} name={name} size={size} />
      ))}
    </div>
  )
}
