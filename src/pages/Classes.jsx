import ClassCard from '../components/ClassCard'
import CTASection from '../components/CTASection'

const classes = [
    { name: 'Ashtanga Vinyasa', description: 'A powerful flowing practice that synchronizes breath with a progressive series of postures. Builds internal heat, strength, and flexibility.', duration: '60 min', image: '/images/class_ashtanga.png', category: 'Strength & Flow' },
    { name: 'Hatha Yoga', description: 'Classical approach with slower, mindful postures held longer. Ideal for all levels, fostering body awareness, balance, and deep relaxation.', duration: '60 min', image: '/images/class_hatha.png', category: 'Foundation' },
    { name: 'Meditation', description: 'Guided mindfulness, visualization, and silent sitting practices. Learn powerful techniques to quiet mental chatter and cultivate inner peace.', duration: '45 min', image: '/images/class_meditation.png', category: 'Mindfulness' },
    { name: 'Pranayama', description: 'Ancient yogic breathing: Kapalbhati, Anulom Vilom, Bhramari, Ujjayi. Improve energy, respiratory health, and nervous system balance.', duration: '45 min', image: '/images/class_pranayama.png', category: 'Breathwork' },
    { name: 'Zumba Fitness', description: 'High-energy dance fitness inspired by Latin rhythms. A fun, effective cardio workout that burns calories while lifting your mood and spirit.', duration: '60 min', image: '/images/class_zumba.png', category: 'Dance & Cardio' },
    { name: 'Functional Fitness', description: 'Bodyweight training that improves real-world movement patterns. Enhances strength, stability, coordination, and injury resilience for everyday activities.', duration: '45 min', image: '/images/class_functional.png', category: 'Fitness' },
    { name: 'Sound Healing', description: 'Deeply restorative session using Tibetan singing bowls and crystal bowls. Therapeutic vibrations promote deep relaxation, stress relief, and energetic balance.', duration: '60 min', image: '/images/class_sound_healing.png', category: 'Healing' },
]

export default function Classes() {
    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Find Your Practice</span>
                <h1 className="page-header-title">Our Classes</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    Explore our diverse range of yoga and wellness programs, each designed to nurture a different aspect of your being.
                </p>
            </div>

            {/* Classes Grid */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="classes-grid">
                        {classes.map(cls => <ClassCard key={cls.name} {...cls} />)}
                    </div>
                </div>
            </section>

            {/* Advice strip */}
            <section style={{ padding: '52px 24px', background: 'var(--beige)', textAlign: 'center' }}>
                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📋</div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 12 }}>
                        Not Sure Which Class to Choose?
                    </h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--deep-brown)', opacity: .72, marginBottom: 24 }}>
                        Just reach out on WhatsApp and our team will help you find the perfect class based on your fitness goals, experience level, and schedule.
                    </p>
                    <a
                        href="https://wa.me/9664172827?text=Hello%20Yogam%20Team%2C%20I%20need%20help%20choosing%20the%20right%20class%20for%20me.%20%F0%9F%99%8F"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-wa"
                    >
                        💬 Get Personalized Advice on WhatsApp
                    </a>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
