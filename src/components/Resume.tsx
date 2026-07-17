import { FileDown, FileText } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

export default function Resume() {
  const resumeUrl = import.meta.env.BASE_URL + profile.resumeFile

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="The one-page version"
      subtitle="Preview the resume below, or grab the PDF for the full document."
    >
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/70 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-blue-50 p-2.5">
                <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">{profile.name} — Resume</p>
                <p className="text-xs text-slate-500">PDF · updated for current term</p>
              </div>
            </div>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download PDF
            </a>
          </div>

          {/* Embedded preview — many mobile browsers can't inline PDFs, so a
              download fallback is always rendered underneath. */}
          <div className="hidden md:block">
            <object
              data={resumeUrl}
              type="application/pdf"
              className="h-[42rem] w-full"
              aria-label="Embedded resume PDF preview"
            >
              <ResumeFallback resumeUrl={resumeUrl} />
            </object>
          </div>
          <div className="md:hidden">
            <ResumeFallback resumeUrl={resumeUrl} />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

function ResumeFallback({ resumeUrl }: { resumeUrl: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <span className="rounded-2xl bg-blue-50 p-4">
        <FileText className="h-8 w-8 text-blue-600" aria-hidden="true" />
      </span>
      <div>
        <p className="font-semibold text-slate-900">Inline preview unavailable</p>
        <p className="mt-1 text-sm text-slate-500">
          Your browser can’t display the PDF here — download it instead.
        </p>
      </div>
      <a
        href={resumeUrl}
        download
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-600"
      >
        <FileDown className="h-4 w-4" aria-hidden="true" />
        Download Resume
      </a>
    </div>
  )
}
