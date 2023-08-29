'use client'

// DEPENDENCY
import { useFileInput } from './Root'

// ASSET
import { UploadCloud } from 'lucide-react'

export function FileInputTrigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-colors hover:border-sky-200 hover:bg-sky-25 hover:text-sky-500 dark:border-zinc-600 dark:text-zinc-400 hover:dark:border-sky-800 hover:dark:bg-sky-975 hover:dark:text-sky-200"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 transition-colors group-hover:border-sky-50 group-hover:bg-sky-100 dark:border-zinc-800 dark:bg-zinc-700 group-hover:dark:border-sky-950 group-hover:dark:bg-sky-800">
        <UploadCloud className="h-5 w-5 transition-colors group-hover:text-sky-600 group-hover:dark:text-sky-200" />
      </div>

      <div className="flex flex-col text-sm">
        <p>
          <span className="font-bold text-sky-600 dark:text-sky-400">
            Click to upload
          </span>{' '}
          or drag and drop
        </p>
        <p className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      </div>
    </label>
  )
}
