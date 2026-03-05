import ScheduleTable from '../components/ScheduleTable'
import CTASection from '../components/CTASection'
import { MessageCircle } from 'lucide-react'

const legend = [
    { name: 'Ashtanga Vinyasa', color: '#c17f52' },
    { name: 'Hatha Yoga', color: '#6b9e7a' },
    { name: 'Meditation', color: '#9b8ec0' },
    { name: 'Pranayama', color: '#6b9fbb' },
    { name: 'Zumba', color: '#d4856a' },
    { name: 'Functional Fitness', color: '#bb9b6b' },
    { name: 'Sound Healing', color: '#b07b8c' },
]

export default function Schedule() {
    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Plan Your Week</span>
                <h1 className="page-header-title">Class Schedule</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    Morning (6–9 AM) and evening (5–8 PM) classes, 7 days a week. Book any class via WhatsApp.
                </p>
            </div>

            {/* Timing cards */}
            <section style={{ padding: '36px 24px 0', background: 'var(--cream)' }}>
                <div className="container">
                    <div className="responsive-grid-2" style={{ gap: 16 }}>
                        {[
                            { emoji: '🌅', label: 'Morning Session', sub: '6:00 AM – 9:00 AM | Monday – Sunday' },
                            { emoji: '🌆', label: 'Evening Session', sub: '5:00 PM – 8:00 PM | Monday – Sunday' },
                        ].map(item => (
                            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 22px', background: 'var(--beige)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: 16 }}>
                                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</span>
                                <div>
                                    <div style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--deep-brown)' }}>{item.label}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--deep-brown)', opacity: .65 }}>{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Table */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    {/* Legend */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                        {legend.map(l => (
                            <div key={l.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: l.color, flexShrink: 0, display: 'inline-block' }} />
                                <span style={{ fontSize: '0.8rem', color: 'var(--deep-brown)' }}>{l.name}</span>
                            </div>
                        ))}
                    </div>
                    <ScheduleTable />
                    <div style={{ textAlign: 'center', marginTop: 28 }}>
                        <p style={{ fontSize: '0.85rem', color: 'var(--deep-brown)', opacity: .55, marginBottom: 16 }}>* Schedule may vary on holidays. WhatsApp us to confirm.</p>
                        <a href="https://wa.me/9664172827?text=Hello%20Yogam%20Team%2C%20I%20want%20to%20book%20a%20class.%20Please%20share%20the%20latest%20schedule.%20%F0%9F%99%8F"
                            target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                            <MessageCircle size={16} /> Book a Class on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <CTASection title="Reserve Your Spot Today" subtitle="Classes fill up fast! Message us on WhatsApp to secure your place in any class." primaryLabel="Book via WhatsApp" />
        </div>
    )
}
