import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, MapPin, Phone, Clock } from 'lucide-react'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Classes', path: '/classes' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Diet Plan', path: '/diet-plan' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
]

const services = [
    'Ashtanga Vinyasa Yoga', 'Hatha Yoga', 'Zumba Fitness',
    'Functional Fitness', 'Meditation', 'Pranayama',
    'Sound Healing', 'Personalized Diet Plan',
]

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: 14 }}>
                            <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--sand)' }}>YOGAM</div>
                            <div style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--warm-tan)', textTransform: 'uppercase' }}>JODHPUR</div>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--sand)', opacity: 0.78, lineHeight: 1.75, marginBottom: 18 }}>
                            Elevate Your Mind, Body & Soul. A sanctuary for holistic wellness in the heart of Jodhpur, Rajasthan.
                        </p>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <a href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram"><Instagram size={17} /></a>
                            <a href="https://wa.me/9664172827" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp"><MessageCircle size={17} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="footer-col-title">Quick Links</div>
                        {navLinks.map(l => <Link key={l.path} to={l.path} className="footer-link">{l.label}</Link>)}
                    </div>

                    {/* Programs */}
                    <div>
                        <div className="footer-col-title">Our Programs</div>
                        {services.map(s => <div key={s} className="footer-link" style={{ cursor: 'default' }}>{s}</div>)}
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="footer-col-title">Contact Us</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <MapPin size={15} style={{ color: 'var(--warm-tan)', flexShrink: 0, marginTop: 2 }} />
                                <span style={{ fontSize: '0.875rem', color: 'var(--sand)', opacity: .78 }}>Jodhpur, Rajasthan, India</span>
                            </div>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                <Phone size={15} style={{ color: 'var(--warm-tan)', flexShrink: 0 }} />
                                <a href="https://wa.me/9664172827" className="footer-link" style={{ margin: 0 }}>+91 96641 72827</a>
                            </div>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <Clock size={15} style={{ color: 'var(--warm-tan)', flexShrink: 0, marginTop: 2 }} />
                                <div style={{ fontSize: '0.875rem', color: 'var(--sand)', opacity: .78 }}>
                                    <div>Morning: 6:00 – 9:00 AM</div>
                                    <div>Evening: 5:00 – 8:00 PM</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                                <Instagram size={15} style={{ color: 'var(--warm-tan)', flexShrink: 0 }} />
                                <a href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ margin: 0 }}>@yogam.jodhpur</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <span>© {year} Yogam – Jodhpur. All rights reserved.</span>
                <span style={{ fontFamily: 'Dancing Script,cursive', fontSize: '1rem', color: 'var(--warm-tan)' }}>✦ Elevate Your Mind, Body & Soul ✦</span>
            </div>
        </footer>
    )
}
