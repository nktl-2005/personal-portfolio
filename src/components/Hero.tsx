import { ArrowRight, FileDown, GraduationCap, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const quickStats = [
  { label: 'GPA — Dean’s Honours', value: '3.85' },
  { label: 'Class of', value: '2028' },
  { label: 'Featured Projects', value: '6' },
]

const floatingChips = [
  { label: 'SolidWorks · FEA', className: '-top-4 -left-6' },
  { label: 'C++ · Python', className: 'top-1/3 -right-8' },
  { label: '3D Printing · nTop', className: '-bottom-5 left-8' },
]

export default function Hero() {
  const resumeUrl = import.meta.env.BASE_URL + profile.resumeFile

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-64 -left-40 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:grid-cols-[1.2fr_1fr]">
        {/* Intro */}
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              {profile.availability}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-blue-600 md:text-2xl">
              {profile.title}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {profile.tagline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-blue-500" aria-hidden="true" />
                {profile.university}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-blue-500" aria-hidden="true" />
                {profile.location}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
              >
                View Projects
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-300 hover:text-blue-600 hover:shadow"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <dl className="mt-12 flex max-w-md gap-10">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-last mt-1 text-xs text-slate-500">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-slate-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Headshot placeholder */}
        <Reveal delay={150} className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 shadow-xl">
              {/*
                Replace this block with a real headshot:
                <img src={`${import.meta.env.BASE_URL}headshot.jpg`} alt="Nicholas Lee" className="aspect-square w-full object-cover" />
              */}
              <div className="flex aspect-square w-full items-center justify-center">
                <span className="text-8xl font-bold tracking-tight text-white/95">
                  {profile.initials}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-950/60 to-transparent p-5 text-center">
                <p className="text-sm font-medium text-white/90">
                  Mechanical Design · Additive Manufacturing · Mechatronics
                </p>
              </div>
            </div>

            {floatingChips.map((chip) => (
              <span
                key={chip.label}
                className={`absolute ${chip.className} hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-md sm:inline-block`}
                aria-hidden="true"
              >
                {chip.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
