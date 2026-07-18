import type { SpecRow } from '../data/types'
import RichText from './RichText'

/** Compact specification table for requirements and constraints. */
export default function SpecTable({ rows }: { rows: SpecRow[] }) {
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">Requirements and constraints</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.parameter} className="border-b border-line">
            <th
              scope="row"
              className="w-[45%] py-3 pr-4 text-left align-top font-normal text-ink-soft"
            >
              {row.parameter}
            </th>
            <td className="py-3 text-left align-top font-mono text-[0.8125rem] text-ink">
              <RichText text={row.value} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
