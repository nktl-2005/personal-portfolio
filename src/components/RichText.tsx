import { Fragment } from 'react'

/**
 * Renders case-study text, styling editable placeholders like
 * "[Add measured result]" as visibly-unfinished chips so missing
 * information is never mistaken for real content.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <span
            key={i}
            className="placeholder-chip"
            title="Editable placeholder — replace with real project information"
          >
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
