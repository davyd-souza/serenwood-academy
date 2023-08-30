// DEPENDENCY
import { tv, VariantProps } from 'tailwind-variants'

// COMPONENT
import { Button } from '@/components/Button'

// ASSET
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'

// UTIL
import { formatBytes } from '@/utils/formatBytes'

// VARIANT
const fileItem = tv({
  slots: {
    root: 'group flex items-start gap-4 rounded-lg border p-4',
    icon: 'rounded-full border-4 p-2 border-sky-100 bg-sky-200 text-sky-600 dark:border-sky-950 dark:bg-sky-800 dark:text-sky-400',
    deleteButton: 'ml-auto',
  },

  variants: {
    state: {
      progress: {
        root: 'border-zinc-200 dark:border-zinc-800',
        deleteButton: 'text-zinc-500 dark:text-zinc-400',
      },
      complete: {
        root: 'border-sky-500 dark:border-sky-300',
      },
      error: {
        root: 'bg-error-25 border-error-300 dark:border-error-700 dark:bg-transparent',
        icon: 'border-error-100 bg-error-200 text-error-600 dark:border-error-950 dark:bg-error-800 dark:text-error-300',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
})

// TYPE
type ListItemProps = VariantProps<typeof fileItem> & {
  name: string
  size: number
}

export function ListItem({ name, size, state = 'progress' }: ListItemProps) {
  const { root, icon, deleteButton } = fileItem({ state })

  return (
    <article className={root()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1 text-sm">
          <div>
            <p className="font-medium text-error-700 dark:text-error-300">
              Upload failed. Please try again!
            </p>
            <p className="text-error-600 dark:text-error-200">{name}</p>
          </div>

          <button
            className="font-medium text-error-700 dark:text-error-300"
            type="button"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="text-sm">
            <p className="font-medium">{name}</p>
            <p className="text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </p>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="dark: h-2 flex-1 rounded-full bg-sky-100 dark:bg-sky-950">
              <div
                className="h-2 rounded-full bg-sky-500 dark:bg-sky-300"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-xs">{state === 'complete' ? 100 : 80}%</span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-sky-500 text-white dark:fill-sky-300 dark:text-zinc-900" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </article>
  )
}
