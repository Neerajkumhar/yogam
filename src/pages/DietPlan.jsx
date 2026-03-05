import CTASection from '../components/CTASection'
import { Check } from 'lucide-react'

const principles = [
    { icon: '🌱', title: 'Sattvic Diet', desc: 'Pure, fresh, plant-based foods that cultivate clarity, energy, and spiritual well-being according to Ayurveda.' },
    { icon: '🍂', title: 'Seasonal Eating', desc: 'Sync your diet with nature\'s rhythms. Eat what grows in season for maximum nutrition and alignment with your environment.' },
    { icon: '🔥', title: 'Agni Balance', desc: 'Strengthen digestive fire through mindful eating habits, proper food combinations, and herbal support.' },
    { icon: '⚖️', title: 'Dosha Harmony', desc: 'Vata, Pitta, or Kapha — your constitution determines your ideal diet. We create a plan that brings perfect balance.' },
]

const included = [
    'Initial body assessment & lifestyle analysis',
    'Personalized macro and calorie calculation',
    'Seasonal Indian food recommendations',
    'Ayurvedic dosha-based meal planning',
    'Weekly meal plans with recipes',
    'Hydration and detox guidance',
    'Supplement and herb recommendations',
    'Yoga-nutrition synergy guidance',
    'Ongoing support via WhatsApp',
]

export default function DietPlan() {
    const msg = encodeURIComponent('Hello Yogam Team,\nI am interested in getting a *Personalized Diet Plan*.\n\nPlease share more details about the consultation process and pricing. 🙏')

    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Nourish Your Body</span>
                <h1 className="page-header-title">Personalized Diet Plan</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    True wellness begins on your plate. Discover the power of Ayurvedic nutrition tailored specifically for your body and goals.
                </p>
            </div>

            {/* Hero */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="two-col">
                        <div>
                            <span className="section-label">Food as Medicine</span>
                            <h2 className="section-title">The Yogam Approach</h2>
                            <div className="ornament-divider" style={{ justifyContent: 'flex-start' }}><span>🪷</span></div>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .8, marginBottom: 14 }}>
                                At Yogam, we understand that yoga and nutrition are inseparable partners on the path to holistic wellness. Your yoga practice reaches its full potential when supported by the right food — food that energizes, heals, and aligns with your dosha constitution.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .7, marginBottom: 28 }}>
                                Our certified nutritionist combines modern dietetics with ancient Ayurvedic principles to create a personalized plan that helps you lose weight, gain strength, improve digestion, and boost mental clarity.
                            </p>
                            <a href={`https://wa.me/9664172827?text=${msg}`} target="_blank" rel="noopener noreferrer" id="diet-consult-btn" className="btn btn-wa">
                                🥗 Book Free Consultation
                            </a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'var(--warm-tan)', opacity: .1, filter: 'blur(40px)', pointerEvents: 'none' }} />
                            <img src="/images/diet_plan.png" alt="Ayurvedic wellness diet" className="section-img" style={{ position: 'relative', maxHeight: 480 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <h2 className="section-title">Our Nutrition Philosophy</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <div className="diet-grid">
                        {principles.map(p => (
                            <div key={p.title} className="card" style={{ padding: 28, textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: 14 }}>{p.icon}</div>
                                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 10 }}>{p.title}</h3>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--deep-brown)', opacity: .7 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's included */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container" style={{ maxWidth: 780 }}>
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <h2 className="section-title">What's Included in Your Plan</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <div style={{ padding: 40, borderRadius: 24, background: 'var(--beige)', border: '1px solid rgba(201,169,110,0.3)' }}>
                        <div className="responsive-grid-2" style={{ gap: '12px 24px' }}>
                            {included.map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Check size={11} color="white" />
                                    </div>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--deep-brown)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(201,169,110,0.3)' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--deep-brown)', opacity: .7, marginBottom: 20 }}>Ready to transform your relationship with food?</p>
                            <a href={`https://wa.me/9664172827?text=${msg}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                                💬 Get Your Personalized Diet Plan
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection title="Nourish Your Body, Fuel Your Practice" subtitle="Combine yoga with Ayurvedic nutrition for a complete transformation of your health and vitality." primaryLabel="Start Your Wellness Journey" />
        </div>
    )
}
