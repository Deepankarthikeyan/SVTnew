import { X } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'

type EnquireModalProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', email: '', phone: '', message: '' }

export function EnquireModal({ open, onClose }: EnquireModalProps) {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (form.message.trim().length < 10) {
      next.message = 'Please share a brief message (at least 10 characters).'
    }
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:enquire@spiritualvillage.org?subject=${encodeURIComponent(
      'Spiritual Village Enquiry',
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  function handleClose() {
    setForm(initial)
    setErrors({})
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="enquire-title">
      <button type="button" className="modal__backdrop" aria-label="Close dialog" onClick={handleClose} />
      <div className="modal__panel">
        <button type="button" className="modal__close" onClick={handleClose} aria-label="Close">
          <X size={22} />
        </button>
        <h2 id="enquire-title">Enquire Now</h2>
        <p className="modal__lead">Share your interest in Spiritual Based Life Living at the Village.</p>

        {submitted ? (
          <div className="modal__success">
            <p>
              Your email client should open with your enquiry ready to send. If it does not open,
              please email <a href="mailto:enquire@spiritualvillage.org">enquire@spiritualvillage.org</a>{' '}
              directly.
            </p>
            <button type="button" className="btn btn--primary" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <form className="enquire-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </label>
            <label>
              Phone <span className="optional">(optional)</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                autoComplete="tel"
              />
            </label>
            <label>
              Message
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </label>
            <button type="submit" className="btn btn--primary btn--block">Send Enquiry</button>
          </form>
        )}
      </div>
    </div>
  )
}
