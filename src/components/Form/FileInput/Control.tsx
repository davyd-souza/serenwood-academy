'use client'

// DEPENDENCY
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

// TYPE
type ControlProps = ComponentProps<'input'>

export function FileInputControl({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFileChange}
      multiple={multiple}
      {...props}
    />
  )
}
