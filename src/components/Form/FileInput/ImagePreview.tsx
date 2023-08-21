'use client'

// DEPENDENCY
import { useMemo } from 'react'
import { useFileInput } from './Root'

// ASSET
import { User } from 'lucide-react'
import Image from 'next/image'

export function FileInputImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="grid h-16 w-16 place-items-center rounded-full bg-sky-50 dark:bg-sky-950">
        <User className="h-8 w-8 text-sky-500 dark:text-sky-300" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
        width={64}
        height={64}
      />
    )
  }
}
