// COMPONENT
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/Form/Select'

// ASSET
import { Clock } from 'lucide-react'

// UTIL
import { timezones } from '@/utils/timezones'

export function TimezoneSelect() {
  return (
    <SelectRoot name="timezone">
      <SelectTrigger id="timezone">
        <Clock className="h-5 w-5" />
        <SelectValue placeholder="Select your timezone..." />
      </SelectTrigger>

      <SelectContent sideOffset={4}>
        {timezones.map(({ text }) => {
          const [utc, ...timezoneName] = text.split(' ')
          const timezone = timezoneName.join(' ')

          return (
            <SelectItem key={timezone} value={timezone}>
              <span>
                {timezone}{' '}
                <span className="text-sm text-zinc-500 dark:text-zinc-300">
                  {utc}
                </span>
              </span>
            </SelectItem>
          )
        })}
      </SelectContent>
    </SelectRoot>
  )
}
