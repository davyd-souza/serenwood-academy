// COMPONENT
import { Button } from '@/components/Button'
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
          <Button type="button" variant="ghost">
            <Bold className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button type="button" variant="ghost">
            <Italic className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button type="button" variant="ghost">
            <Link className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button type="button" variant="ghost">
            <List className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
          <Button type="button" variant="ghost">
            <ListOrdered className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </Button>
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
