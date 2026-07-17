interface TagProps {
  label: string
}

/** Small pill used for tools, methods, and skills. */
export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100">
      {label}
    </span>
  )
}
