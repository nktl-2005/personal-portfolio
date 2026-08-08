import { Fragment } from 'react'

/**
 * Renders case-study text with two pieces of light markup:
 *
 *   **bold**            emphasis, e.g. the lead-in label on an outcome paragraph
 *   [Add something]     an editable placeholder, styled as a visibly-unfinished
 *                       chip so missing information is never mistaken for real
 *                       content
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.startsWith('[') && part.endsWith(']')) {
          return (
            <span
              key={i}
              className="placeholder-chip"
              title="Editable placeholder — replace with real project information"
            >
              {part}
            </span>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
