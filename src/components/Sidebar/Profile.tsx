// DEPENDENCY
import Image from 'next/image'

// ASSET
import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid gap-3">
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

      <button className="ml-auto rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </button>
    </div>
  )
}
