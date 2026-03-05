import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import { MessageCircle } from 'lucide-react'

const testimonials = [
    { name: 'Priya Sharma', role: 'Hatha Yoga Practitioner • 1 Year', rating: 5, review: 'Yogam has completely transformed my life. The morning Hatha classes leave me energized all day. I\'ve gained flexibility I never thought possible!' },
    { name: 'Rajesh Mehta', role: 'Meditation Student • 6 Months', rating: 5, review: 'The meditation sessions here are deeply healing. I had chronic stress and anxiety, but after 3 months at Yogam, my mind is calmer than ever. Sound Healing is magical!' },
    { name: 'Anita Rathore', role: 'Zumba & Fitness • 8 Months', rating: 5, review: 'Amazing experience! Lost 12 kgs with Zumba and Functional Fitness. The personalized diet plan was the game-changer. Yogam truly feels like family!' },
    { name: 'Deepak Vishnoi', role: 'Ashtanga Vinyasa • 2 Years', rating: 5, review: 'I was looking for a serious yoga practice in Jodhpur and Yogam exceeded all expectations. The Ashtanga teaching is authentic, disciplined, and deeply transformative.' },
    { name: 'Sunita Bohra', role: 'Pranayama & Wellness • 1 Year', rating: 5, review: 'I joined for pranayama after my doctor suggested yoga for respiratory health. Within 3 months, my breathing improved dramatically. Highly trained and caring instructors!' },
    { name: 'Vikram Singh', role: 'Functional Fitness Student • 5 Months', rating: 5, review: 'After years of gym workouts without results, Functional Fitness at Yogam gave me real, practical strength. The diet guidance alongside training has been phenomenal.' },
    { name: 'Kavita Jain', role: 'Sound Healing Participant • 3 Months', rating: 5, review: 'The sound healing sessions are unlike anything I\'ve experienced. Pure bliss! I come out feeling lighter, more centered, and deeply relaxed. A truly sacred experience.' },
    { name: 'Narendra Purohit', role: 'Senior Yoga Practitioner • 18 Months', rating: 5, review: 'At 58, I thought yoga was too late for me. The patient instructors at Yogam proved me completely wrong. I feel 20 years younger and more energetic than ever!' },
    { name: 'Ritu Bhandari', role: 'Hatha & Meditation • 8 Months', rating: 5, review: 'Yogam is truly special. The combination of yoga, pranayama, and meditation has completely changed how I handle stress. My sleep improved — everything improved!' },
]

const stats = [
    { value: '500+', label: 'Happy Students' },
    { value: '8+', label: 'Programs Offered' },
    { value: '5★', label: 'Average Rating' },
    { value: '4+', label: 'Years of Excellence' },
]

export default function Testimonials() {
    const shareMsg = encodeURIComponent('Hello Yogam Team,\nI\'d love to share my experience and success story!\n\nPlease let me know how I can submit a testimonial. 🙏')

    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Real Stories, Real Results</span>
                <h1 className="page-header-title">Student Testimonials</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    Hear from the hundreds of students whose lives have been transformed by their practice at Yogam.
                </p>
            </div>

            {/* Stats */}
            <section style={{ padding: '36px 24px', background: 'var(--cream)' }}>
                <div className="container" style={{ maxWidth: 780 }}>
                    <div className="services-grid">
                        {stats.map(s => (
                            <div key={s.label} className="stat-box">
                                <div className="stat-val">{s.value}</div>
                                <div className="stat-lbl">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="testimonials-grid">
                        {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
                    </div>
                </div>
            </section>

            {/* Share strip */}
            <section style={{ padding: '56px 24px', background: 'var(--beige)', textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.9rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 12 }}>
                    Share Your Yogam Story
                </h2>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--deep-brown)', opacity: .7, maxWidth: 500, margin: '0 auto 24px' }}>
                    Are you a Yogam student with a transformation story? We'd love to feature your journey to inspire others!
                </p>
                <a href={`https://wa.me/9664172827?text=${shareMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                    <MessageCircle size={16} /> Share My Story on WhatsApp
                </a>
            </section>

            <CTASection />
        </div>
    )
}
