export function Logo() {
  return (
    <strong className="mx-3 flex items-center gap-2">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.333 13.333v8m0-8L16 6.667 2.667 13.333 16 20l13.333-6.667z"
          stroke="#0284C7"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16v6.667c4 4 12 4 16 0V16"
          stroke="#0284C7"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-baseline gap-2">
        <span className="text-xl/4 font-semibold">Serenwood</span>
        <span className="text-sm font-normal">Academy</span>
      </div>
    </strong>
  )
}
