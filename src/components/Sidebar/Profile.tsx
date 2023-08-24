// DEPENDENCY
import Image from 'next/image'

// COMPONENT
import { Button } from '@/components/Button'

// ASSET
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile gap-3">
      <Image
        className="h-10 w-10 rounded-full"
        src="https://github.com/davyd-souza.png"
        alt=""
        width={40}
        height={40}
      />
      <div className="overflow-hidden">
        <p className="text-sm font-semibold">Davyd Souza</p>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-400">
          davyd.eduardo.souza@hotmail.com
        </p>
      </div>

      <Button variant="ghost" type="button" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
