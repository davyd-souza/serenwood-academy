// COMPONENT
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/Form/Select'
import { Textarea } from '@/components/Form/Textarea'

// ASSET
import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'

export function BioTextEditor() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <SelectRoot defaultValue="normal">
          <SelectTrigger>
            <SelectValue placeholder="Select text style..." />
          </SelectTrigger>
          <SelectContent sideOffset={4}>
            <SelectItem value="normal">Normal text</SelectItem>
            <SelectItem value="heading1">Heading 1</SelectItem>
            <SelectItem value="heading2">Heading 2</SelectItem>
            <SelectItem value="heading3">Heading 3</SelectItem>
          </SelectContent>
        </SelectRoot>
        <div className="flex items-center gap-1">
          <button className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Bold className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
          <button className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Italic className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
          <button className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Link className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
          <button className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <List className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
          <button className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <ListOrdered className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </button>
        </div>
      </div>
      <Textarea
        id="bio"
        className="resize-y"
        placeholder="Write your bio here..."
      />
    </div>
  )
}
