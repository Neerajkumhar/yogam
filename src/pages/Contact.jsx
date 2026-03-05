import ContactForm from '../components/ContactForm'
import { Instagram, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
    { icon: <Phone size={20} style={{ color: 'var(--earth-brown)' }} />, title: 'Phone / WhatsApp', info: '+91 96641 72827', link: 'https://wa.me/9664172827', linkLabel: 'Chat on WhatsApp' },
    { icon: <Instagram size={20} style={{ color: 'var(--earth-brown)' }} />, title: 'Instagram', info: '@yogam.jodhpur', link: 'https://www.instagram.com/yogam.jodhpur/', linkLabel: 'Follow Us' },
    { icon: <MapPin size={20} style={{ color: 'var(--earth-brown)' }} />, title: 'Location', info: 'Jodhpur, Rajasthan, India', link: 'https://maps.google.com/?q=Jodhpur+Rajasthan', linkLabel: 'View on Maps' },
    { icon: <Clock size={20} style={{ color: 'var(--earth-brown)' }} />, title: 'Studio Hours', info: 'Mon – Sun | 6 AM – 9 PM', sub: 'Morning: 6–9 AM | Evening: 5–8 PM', link: null },
]

export default function Contact() {
    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Get in Touch</span>
                <h1 className="page-header-title">Contact Us</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    Have a question? Want to book a class? Send us a message and we'll respond on WhatsApp.
                </p>
            </div>

            {/* Main grid */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.9rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 24 }}>Reach Out to Us</h2>
                            {contactInfo.map((item, i) => (
                                <div key={i} className="info-card">
                                    <div className="info-card-icon">{item.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--deep-brown)', opacity: .55, marginBottom: 3 }}>{item.title}</div>
                                        <div style={{ fontWeight: 600, color: 'var(--deep-brown)', marginBottom: item.sub ? 2 : 0 }}>{item.info}</div>
                                        {item.sub && <div style={{ fontSize: '0.85rem', color: 'var(--deep-brown)', opacity: .65 }}>{item.sub}</div>}
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer"
                                                style={{ fontSize: '0.875rem', color: 'var(--earth-brown)', fontWeight: 500, textDecoration: 'none', display: 'inline-block', marginTop: 4 }}>
                                                {item.linkLabel} →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Direct WA card */}
                            <div style={{ padding: 22, borderRadius: 16, background: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', textAlign: 'center', marginTop: 8 }}>
                                <p style={{ color: '#2e7d32', fontWeight: 500, marginBottom: 12 }}>Prefer a quick message?</p>
                                <a href="https://wa.me/9664172827" target="_blank" rel="noopener noreferrer" id="contact-direct-whatsapp" className="btn btn-wa" style={{ padding: '10px 24px', fontSize: '0.875rem' }}>
                                    <MessageCircle size={15} /> Open WhatsApp Directly
                                </a>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <div style={{ padding: 36, borderRadius: 24, background: 'var(--soft-white)', border: '1px solid rgba(201,169,110,0.2)' }}>
                                <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.65rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 6 }}>Send Us a Message</h2>
                                <p style={{ fontSize: '0.875rem', color: 'var(--deep-brown)', opacity: .6, marginBottom: 24 }}>
                                    Fill in the form — we'll reply via WhatsApp.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ padding: '0 24px 64px', background: 'var(--cream)' }}>
                <div className="container">
                    <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.6rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 18 }}>
                        Find Us in Jodhpur
                    </h3>
                    <div style={{ width: '100%', height: 380, borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(201,169,110,0.3)', boxShadow: '0 8px 30px rgba(92,61,17,0.08)' }}>
                        <iframe
                            title="Yogam Jodhpur Location"
                            src="https://maps.google.com/maps?q=Jodhpur,+Rajasthan,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="100%"
                            style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--deep-brown)', opacity: .5, marginTop: 12 }}>
                        📍 Jodhpur, Rajasthan, India | WhatsApp us for exact directions
                    </p>
                </div>
            </section>
        </div>
    )
}
