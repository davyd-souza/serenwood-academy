'use client'

// DEPENDENCY
import { useState } from 'react'
import Flag from 'react-world-flags'

// COMPONENT
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValue,
} from '@/components/Form/Select'

// UTIL
import { countries } from '@/utils/countries'

// TYPE
type CountryCode = keyof typeof countries

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>(undefined)

  const handleCountryChange = (country: string) => {
    setValue(country as CountryCode)
  }
  return (
    <SelectRoot
      name="country"
      value={value}
      onValueChange={handleCountryChange}
    >
      <SelectTrigger id="country">
        <SelectValue placeholder="Select your country..." />
      </SelectTrigger>

      <SelectContent sideOffset={4}>
        {Object.entries(countries).map(([code, title]) => (
          <SelectItem key={code} value={code}>
            <span className="flex items-center gap-2">
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={code}
              />
              {title}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}
