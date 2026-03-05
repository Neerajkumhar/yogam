import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

export default function CTASection({
    title = 'Begin Your Wellness Journey Today',
    subtitle = 'Join hundreds of students who have transformed their lives through yoga and mindfulness at Yogam Jodhpur.',
    primaryLabel = 'Book a Free Trial',
    secondaryLabel = 'View Our Classes',
    secondaryPath = '/classes',
}) {
    const msg = encodeURIComponent(
        'Hello Yogam Team,\nI want to book a *Free Trial Class*.\n\nPlease share the available timings. 🙏'
    )

    return (
        <section className="cta-section">
            {/* Decorative blobs */}
            <div style={{
                position: 'absolute', top: '-30%', left: '20%',
                width: 320, height: 320, borderRadius: '50%',
                background: 'var(--sand)', opacity: 0.08, filter: 'blur(70px)', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '-30%', right: '20%',
                width: 280, height: 280, borderRadius: '50%',
                background: 'var(--warm-tan)', opacity: 0.08, filter: 'blur(60px)', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
                <div style={{ fontFamily: 'Dancing Script,cursive', fontSize: '1.35rem', color: 'var(--warm-tan)', marginBottom: 8 }}>
                    ✦ Start Today ✦
                </div>
                <h2 className="cta-title">{title}</h2>
                <p className="cta-sub">{subtitle}</p>
                <div className="cta-row">
                    <a
                        href={`https://wa.me/9664172827?text=${msg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="cta-book-whatsapp"
                        className="btn btn-wa"
                    >
                        <MessageCircle size={18} />{primaryLabel}
                    </a>
                    <Link
                        to={secondaryPath}
                        id="cta-view-classes"
                        className="btn"
                        style={{ border: '2px solid rgba(201,169,110,0.5)', color: 'var(--sand)', background: 'rgba(255,255,255,0.08)' }}
                    >
                        {secondaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    )
}
