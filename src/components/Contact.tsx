import { useState, type FormEvent } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import Section from './Section'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Browse my repositories',
    href: profile.github,
    icon: Github,
    external: true,
  },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  // No backend — submitting composes an email in the visitor's mail client.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'your website'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something"
      subtitle="Whether it’s a co-op opportunity, a research question, or a design team collaboration — my inbox is open."
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <Reveal>
          <div className="space-y-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className="rounded-xl bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                  <channel.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {channel.label}
                  </span>
                  <span className="block text-sm text-slate-500 transition-colors group-hover:text-blue-600">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-sm leading-relaxed text-slate-600">
              Based in {profile.location} — {profile.availability.toLowerCase()}.
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role, project, or idea…"
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
            <p className="mt-3 text-xs text-slate-500">
              This form opens your email client — no data is stored or sent to a server.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
