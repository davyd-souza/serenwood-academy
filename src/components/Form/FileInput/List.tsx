'use client'

// DEPENDENCY
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

// COMPONENT
import { Button } from '@/components/Button'

// ASSET
import { Trash2, UploadCloud } from 'lucide-react'

// UTIL
import { formatBytes } from '@/utils/formatBytes'

export function FileInputList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map(({ name, size }) => (
        <article
          key={name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
        >
          <div className="rounded-full border-4 border-sky-100 bg-sky-200 p-2 text-sky-600 dark:border-sky-950 dark:bg-sky-800 dark:text-sky-400">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="text-sm">
              <p className="font-medium">{name}</p>
              <p className="text-zinc-500 dark:text-zinc-400">
                {formatBytes(size)}
              </p>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="dark: h-2 flex-1 rounded-full bg-sky-100 dark:bg-sky-950">
                <div className="h-2 w-4/5 rounded-full bg-sky-500 dark:bg-sky-300" />
              </div>
              <span className="text-xs">80%</span>
            </div>
          </div>

          <Button type="button" variant="ghost" className="ml-auto">
            <Trash2 className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
        </article>
      ))}
    </div>
  )
}
