export function UsedSpaceWidget() {
  return (
    <div className="grid gap-4 rounded-lg bg-sky-50 px-4 py-5 dark:bg-sky-950">
      <div className="space-y-1">
        <p className="text-sm font-medium text-sky-600 dark:text-sky-100">
          Used space
        </p>
        <p className="text-sm text-sky-500 dark:text-sky-200">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-sky-100 dark:bg-sky-900">
        <div className="h-2 w-4/5 rounded-full bg-sky-500 dark:bg-sky-200" />
      </div>

      <div className="flex gap-3">
        <button className="text-sm font-medium text-sky-500 transition-colors hover:text-sky-600 dark:text-sky-200 dark:hover:text-sky-100">
          Dismiss
        </button>
        <button className="text-sm font-medium text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-100 dark:hover:text-sky-50">
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
