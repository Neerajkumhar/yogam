import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', phone: '', message: '' })
    const [errors, setErrors] = useState({})

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.phone.trim()) e.phone = 'Phone is required'
        else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }

        const text = encodeURIComponent(
            `Hello Yogam Team,\nI want to inquire about yoga classes.\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`
        )
        window.open(`https://wa.me/9664172827?text=${text}`, '_blank')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const WaIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ width: 18, height: 18, fill: 'white' }}>
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.773L0 32l8.478-2.003A15.935 15.935 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.286 13.286 0 01-6.78-1.857l-.486-.29-5.032 1.188 1.22-4.903-.317-.503A13.302 13.302 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zM23.4 19.6c-.373-.187-2.208-1.09-2.55-1.213-.342-.123-.592-.187-.84.187-.25.373-.966 1.213-1.184 1.463-.218.25-.435.28-.808.094-.373-.187-1.574-.58-2.998-1.852-1.108-.99-1.855-2.213-2.073-2.587-.218-.373-.023-.574.164-.76.168-.167.373-.435.56-.652.187-.218.25-.373.373-.622.125-.25.063-.468-.031-.655-.094-.187-.84-2.025-1.152-2.773-.303-.727-.61-.629-.84-.64-.218-.01-.468-.012-.718-.012s-.655.094-.998.468c-.343.373-1.309 1.28-1.309 3.121 0 1.841 1.34 3.62 1.527 3.869.187.25 2.636 4.028 6.39 5.648.894.386 1.591.617 2.134.79.896.286 1.712.245 2.357.149.719-.107 2.208-.903 2.52-1.776.312-.873.312-1.62.218-1.776-.094-.156-.343-.25-.716-.437z" />
        </svg>
    )

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }} noValidate>
            <div>
                <label className="form-label" htmlFor="c-name">Full Name *</label>
                <input
                    id="c-name" name="name" type="text"
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    className={`form-input${errors.name ? ' error' : ''}`}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
            </div>

            <div>
                <label className="form-label" htmlFor="c-phone">Phone Number *</label>
                <input
                    id="c-phone" name="phone" type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange}
                    className={`form-input${errors.phone ? ' error' : ''}`}
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
            </div>

            <div>
                <label className="form-label" htmlFor="c-message">Message *</label>
                <textarea
                    id="c-message" name="message" rows={5}
                    placeholder="Tell us about your fitness goals or any questions..."
                    value={form.message} onChange={handleChange}
                    className={`form-input${errors.message ? ' error' : ''}`}
                    style={{ resize: 'vertical' }}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
            </div>

            <button type="submit" id="contact-submit-btn" className="btn btn-wa" style={{ fontSize: '0.95rem' }}>
                <WaIcon /> Send via WhatsApp
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--deep-brown)', opacity: 0.55, marginTop: -8 }}>
                Your message will open in WhatsApp — no data is stored on this website.
            </p>
        </form>
    )
}
