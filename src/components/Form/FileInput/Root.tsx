'use client'

// DEPENDENCY
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

// TYPE
type RootProps = ComponentProps<'div'>
type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

// CONTEXT
const FileInputContext = createContext({} as FileInputContextType)

export function FileInputRoot(props: RootProps) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  const onFilesSelected = (files: File[], multiple = false) => {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
